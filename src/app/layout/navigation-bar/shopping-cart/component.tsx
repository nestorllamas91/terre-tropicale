import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
  menuIconButton: {
    padding: '12px'
  },
  shoppingCartIcon: {
    fontSize: '30px',
    color: 'black'
  }
});

const ShoppingCart = (): JSX.Element => {
  const classes = useStyles();

  return (
    <IconButton classes={{ root: classes.menuIconButton }}>
      <ShoppingCartIcon classes={{ root: classes.shoppingCartIcon }} />
    </IconButton>
  );
};

export default ShoppingCart;
