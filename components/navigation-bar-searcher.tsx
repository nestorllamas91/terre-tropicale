import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';

const useStyles = makeStyles({
  menuIconButton: {
    padding: 0,
  },
  searchIcon: {
    color: 'black',
  },
});

const Searcher = (): JSX.Element => {
  const classes = useStyles();
  const [isModalSearcherOpen, setIsModalSearcherOpen] = useState(false);
  console.log(isModalSearcherOpen);
  const toggleModalSearcher = (open: boolean): void => {
    setIsModalSearcherOpen(open);
  };

  return (
    <div>
      <IconButton onClick={() => toggleModalSearcher(true)} classes={{ root: classes.menuIconButton }}>
        <SearchIcon classes={{ root: classes.searchIcon }} />
      </IconButton>
    </div>
  );
};

export default Searcher;
