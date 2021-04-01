import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import React, { useState } from 'react';

type MenuPagesProps = {
  activePage?: string;
};

const useStyles = makeStyles({
  menuIconButton: {
    padding: 0
  },
  menuIcon: {
    color: 'black'
  },
  menu: {
    width: 150
  },
  menuItemIconButton: {
    marginRight: 10,
    minWidth: 20
  },
  menuItemIcon: {
    fontSize: 24,
    color: 'black'
  },
  menuItemText: {
    fontFamily: 'Lato Regular',
    fontWeight: 400,
    fontSize: 18
  },
  menuItemTextActive: {
    color: '#84cc16'
  },
  menuItemTextInactive: {
    color: '#000000'
  }
});

const MenuPages = ({ activePage }: MenuPagesProps): JSX.Element => {
  const classes = useStyles();
  const [isMenuPagesOpen, setIsMenuPagesOpen] = useState(false);

  const toggleMenuPages = (open: boolean): void => {
    setIsMenuPagesOpen(open);
  };

  return (
    <div>
      <IconButton onClick={() => toggleMenuPages(true)} classes={{ root: classes.menuIconButton }}>
        <MenuIcon classes={{ root: classes.menuIcon }} />
      </IconButton>
      <aside>
        <SwipeableDrawer
          anchor="left"
          open={isMenuPagesOpen}
          onOpen={() => toggleMenuPages(true)}
          onClose={() => toggleMenuPages(false)}
          classes={{ root: classes.menu }}
        >
          <div onClick={() => toggleMenuPages(false)} onKeyDown={() => toggleMenuPages(false)}>
            <List>
              <Link href="/">
                <ListItem button key={'Accueil'}>
                  <ListItemIcon classes={{ root: classes.menuItemIconButton }}>
                    <HomeIcon classes={{ root: classes.menuItemIcon }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Accueil"
                    classes={{
                      primary:
                        activePage === '/'
                          ? `${classes.menuItemText} ${classes.menuItemTextActive}`
                          : `${classes.menuItemText} ${classes.menuItemTextInactive}`
                    }}
                  />
                </ListItem>
              </Link>
              <Link href="/nos-smoothies">
                <ListItem button key={'Nos smoothies'}>
                  <ListItemIcon classes={{ root: classes.menuItemIconButton }}>
                    <LocalDrinkIcon classes={{ root: classes.menuItemIcon }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Nos smoothies"
                    classes={{
                      primary:
                        activePage === '/nos-smoothies'
                          ? `${classes.menuItemText} ${classes.menuItemTextActive}`
                          : `${classes.menuItemText} ${classes.menuItemTextInactive}`
                    }}
                  />
                </ListItem>
              </Link>
              <Link href="/nos-cocktails">
                <ListItem button key={'Nos cocktails'}>
                  <ListItemIcon classes={{ root: classes.menuItemIconButton }}>
                    <LocalBarIcon classes={{ root: classes.menuItemIcon }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Nos cocktails"
                    classes={{
                      primary:
                        activePage === '/nos-cocktails'
                          ? `${classes.menuItemText} ${classes.menuItemTextActive}`
                          : `${classes.menuItemText} ${classes.menuItemTextInactive}`
                    }}
                  />
                </ListItem>
              </Link>
              <Link href="/a-propos">
                <ListItem button key={'À propos'}>
                  <ListItemIcon classes={{ root: classes.menuItemIconButton }}>
                    <InfoIcon classes={{ root: classes.menuItemIcon }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="À propos"
                    classes={{
                      primary:
                        activePage === '/a-propos'
                          ? `${classes.menuItemText} ${classes.menuItemTextActive}`
                          : `${classes.menuItemText} ${classes.menuItemTextInactive}`
                    }}
                  />
                </ListItem>
              </Link>
              <Link href="/contact">
                <ListItem button key={'Contact'}>
                  <ListItemIcon classes={{ root: classes.menuItemIconButton }}>
                    <EmailIcon classes={{ root: classes.menuItemIcon }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Contact"
                    classes={{
                      primary:
                        activePage === '/contact'
                          ? `${classes.menuItemText} ${classes.menuItemTextActive}`
                          : `${classes.menuItemText} ${classes.menuItemTextInactive}`
                    }}
                  />
                </ListItem>
              </Link>
            </List>
          </div>
        </SwipeableDrawer>
      </aside>
    </div>
  );
};

export default MenuPages;
