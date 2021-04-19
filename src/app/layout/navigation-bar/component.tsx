import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from 'next/link';

import MenuPages from '@/app/layout/navigation-bar/menu-pages/component';
import ShoppingCart from '@/app/layout/navigation-bar/shopping-cart/component';

const useStyles = makeStyles({
  appBar: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    boxShadow: '0px 3px 5px 0px rgba(0, 0, 0, 0.5)',
    backgroundColor: '#ecfccb'
  },
  toolBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

const NavigationBar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <AppBar classes={{ root: classes.appBar }}>
      <nav>
        <Toolbar classes={{ root: classes.toolBar }}>
          <MenuPages />
          <Link href="/">
            <img src="/assets/logo/logo.svg" alt="Logo de Terre Tropicale" className="h-10" />
          </Link>
          <ShoppingCart />
        </Toolbar>
      </nav>
    </AppBar>
  );
};

export default NavigationBar;
