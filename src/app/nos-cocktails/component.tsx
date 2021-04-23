import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Head from 'next/head';
import { useState } from 'react';
import ImageGallery from 'react-image-gallery';

import Layout from '@/app/layout/component';
import cocktails from '@/data/cocktails.json';

const useStyles = makeStyles({
  arrowForwardIosIconRoot: {
    marginRight: '4px',
    fontSize: '12px',
    color: '#84cc16'
  },
  buttonLabel: {
    fontFamily: 'Montserrat SemiBold',
    fontWeight: 600,
    fontSize: '10px',
    color: 'white'
  },
  buttonRoot: {
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
    <img src="/assets/images/header-2.jpg" />
    <div className="absolute flex flex-col items-start justify-center px-4 py-3 w-full h-full text-white bg-black bg-opacity-40">
      <h1 className="mb-2 text-2xl">NOS COCKTAILS</h1>
      <p className="mb-1">Cool fruit cocktails</p>
      <p>Préparation sans alcool, 33 cl</p>
    </div>
  </header>
);

const CocktailsSection = () => {
  const { arrowForwardIosIconRoot, buttonLabel, buttonRoot } = useStyles();
  const cocktailsImages = cocktails.map(({ slug }) => ({ original: `/assets/images/${slug}.jpg` }));
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
              className="absolute ml-10 border-2 border-lime-500 border-opacity-50 p-1"
            >
              <div className="flex flex-col p-2 w-36 h-40 text-white bg-black bg-opacity-40">
                <h2 className="mb-2 border-b-2 border-lime-500 pb-1 text-xs">{name.toUpperCase()}</h2>
                <ul className="text-xs">
                  {ingredients.map((ingredient, index) => {
                    const marginBottomClassName = index === ingredients.length - 1 ? '' : 'mb-1';
                    return (
                      <li key={index} className={`flex items-center ${marginBottomClassName}`}>
                        <ArrowForwardIosIcon classes={{ root: arrowForwardIosIconRoot }} />
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
