import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import { useState } from 'react';
import ImageGallery from 'react-image-gallery';

import Icon from '@/app/icon/component';
import Layout from '@/app/layout/component';
import cocktails from '@/data/cocktails.json';
import icons from '@/data/icons.json';

const useStyles = makeStyles({
  buttonLabel: {
    fontFamily: 'Montserrat SemiBold',
    fontWeight: 600,
    fontSize: '10px',
    color: 'white'
  },
  buttonRoot: {
    marginTop: 'auto',
    backgroundColor: '#84cc16',
    '&:hover': {
      backgroundColor: '#65a30d'
    }
  }
});

const NosCocktailsPage = (): JSX.Element => (
  <>
    <Head>
      <title>Nos cocktails | Terre Tropicale</title>
    </Head>
    <Layout>
      <Header />
      <CocktailsSection />
    </Layout>
  </>
);

const Header = () => (
  <header className="relative flex mb-8">
    <img src="/assets/images/headers/header-2.jpg" />
    <div className="absolute flex flex-col items-start justify-center w-full h-full px-4 py-3 text-white bg-black bg-opacity-40">
      <h1 className="mb-2">NOS COCKTAILS</h1>
      <p className="mb-1 text-white">Cool fruit cocktails</p>
      <p className="text-white">Préparation sans alcool, 33 cl</p>
    </div>
  </header>
);

const CocktailsSection = () => {
  const { ARROW } = icons;
  const { buttonLabel, buttonRoot } = useStyles();
  const cocktailsImages = cocktails.map(({ slug }) => ({ original: `/assets/images/cocktails/${slug}.jpg` }));
  const [cocktailImageCurrentIndex, setCocktailImageCurrentIndex] = useState(0);

  return (
    <section className="relative flex items-center mb-8">
      <ImageGallery
        items={cocktailsImages}
        autoPlay={true}
        slideInterval={5000}
        showThumbnails={false}
        showBullets={true}
        showPlayButton={false}
        showFullscreenButton={false}
        onSlide={(currentIndex: number) => setCocktailImageCurrentIndex(currentIndex)}
      />
      {cocktails.map(({ name, ingredients }, index) => {
        if (cocktailImageCurrentIndex === index) {
          return (
            <div
              key={cocktailImageCurrentIndex}
              className="absolute p-1 ml-10 border-2 border-opacity-50 border-lime-500"
            >
              <div className="flex flex-col h-40 p-2 text-white bg-black w-36 bg-opacity-40">
                <p className="pb-1 mb-2 text-xs font-bold text-white border-b-2 border-lime-500">
                  {name.toUpperCase()}
                </p>
                <ul className="text-xs">
                  {ingredients.map((ingredient, index) => {
                    const marginBottomClassName = index === ingredients.length - 1 ? '' : 'mb-1';
                    return (
                      <li key={index} className={`flex items-center ${marginBottomClassName}`}>
                        <Icon path={ARROW.path} viewBox={ARROW.viewBox} className="w-3 mr-2" />
                        {ingredient}
                      </li>
                    );
                  })}
                </ul>
                <Button variant="contained" classes={{ root: buttonRoot, label: buttonLabel }}>
                  EN SAVOIR PLUS
                </Button>
              </div>
            </div>
          );
        }
      })}
    </section>
  );
};

export default NosCocktailsPage;
