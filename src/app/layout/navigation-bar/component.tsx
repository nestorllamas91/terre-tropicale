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
    alignItems: 'center',
    padding: 0,
    height: '64px'
  }
});

const NavigationBar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <AppBar classes={{ root: classes.appBar }}>
      <nav>
        <Toolbar classes={{ root: classes.toolBar }}>
          <Link href="/">
            <img src="/assets/logo/logo.svg" className="pl-2.5 h-10" />
          </Link>
          <div className="flex ml-auto">
            <ShoppingCart />
            <MenuPages />
          </div>
        </Toolbar>
      </nav>
    </AppBar>
  );
};

export default NavigationBar;
