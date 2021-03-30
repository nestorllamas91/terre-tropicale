import { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  menuIconButton: {
    padding: 0
  },
  searchIcon: {
    color: 'black'
  }
});

export default function Searcher(): JSX.Element {
  const [isModalSearcherOpen, setIsModalSearcherOpen] = useState(false);
  const classes = useStyles();

  function openModalSearcher() {
    setIsModalSearcherOpen(true);
  }

  function closeModalSearcher() {
    setIsModalSearcherOpen(false);
  }

  return (
    <div>
      <IconButton onClick={openModalSearcher} classes={{ root: classes.menuIconButton }}>
        <SearchIcon classes={{ root: classes.searchIcon }} />
      </IconButton>
    </div>
  );
}
