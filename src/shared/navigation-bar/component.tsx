import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuPages from './menu-pages/component';
import Link from 'next/link';
import Image from 'next/image';
import Searcher from './searcher/component';
import { makeStyles } from '@material-ui/core/styles';

type NavigationBarProps = {
  activePage?: string;
};

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

export default function NavigationBar({ activePage }: NavigationBarProps): JSX.Element {
  const classes = useStyles();

  return (
    <AppBar classes={{ root: classes.appBar }}>
      <nav>
        <Toolbar classes={{ root: classes.toolBar }}>
          <MenuPages activePage={activePage} />
          <Link href="/">
            <a className="flex flex-row justify-center items-center">
              <Image src="/assets/images/logo/logo.svg" alt="Logo of Terre Tropicale" width={150} height={40} />
            </a>
          </Link>
          <Searcher />
        </Toolbar>
      </nav>
    </AppBar>
  );
}
