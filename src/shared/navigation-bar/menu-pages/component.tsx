import { useState } from 'react';
import Link from 'next/link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import InfoIcon from '@material-ui/icons/Info';
import EmailIcon from '@material-ui/icons/Email';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

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
    fontSize: 20,
    color: 'black'
  },
  menuItemTextActive: {
    fontSize: 14,
    color: '#84cc16'
  },
  menuItemTextInactive: {
    fontSize: 14
  }
});

export default function MenuPages({ activePage }: MenuPagesProps): JSX.Element {
  const [isMenuPagesOpen, setIsMenuPagesOpen] = useState(false);
  const classes = useStyles();

  function openMenuPages() {
    setIsMenuPagesOpen(true);
  }

  function closeMenuPages() {
    setIsMenuPagesOpen(false);
  }

  return (
    <div>
      <IconButton onClick={openMenuPages} classes={{ root: classes.menuIconButton }}>
        <MenuIcon classes={{ root: classes.menuIcon }} />
      </IconButton>
      <aside>
        <SwipeableDrawer anchor="left" open={isMenuPagesOpen} onOpen={openMenuPages} onClose={closeMenuPages} classes={{ root: classes.menu }}>
          <div onClick={closeMenuPages} onKeyDown={closeMenuPages}>
            <List>
              <Link href="/">
                <ListItem button key={'Accueil'}>
                  <ListItemIcon classes={{ root: classes.menuItemIconButton }}>
                    <HomeIcon classes={{ root: classes.menuItemIcon }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Accueil"
                    classes={{ primary: activePage === '' ? classes.menuItemTextActive : classes.menuItemTextInactive }}
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
                    classes={{ primary: activePage === 'nos-smoothies' ? classes.menuItemTextActive : classes.menuItemTextInactive }}
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
                    classes={{ primary: activePage === 'nos-cocktails' ? classes.menuItemTextActive : classes.menuItemTextInactive }}
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
                    classes={{ primary: activePage === 'a-propos' ? classes.menuItemTextActive : classes.menuItemTextInactive }}
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
                    classes={{ primary: activePage === 'contact' ? classes.menuItemTextActive : classes.menuItemTextInactive }}
                  />
                </ListItem>
              </Link>
            </List>
          </div>
        </SwipeableDrawer>
      </aside>
    </div>
  );
}
