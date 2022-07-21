import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  withStyles,
  IconButton,
} from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useContext } from "react";
import GlobalContext from "../../state/global-context";

const useStyles = (theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  content: {
    width: "100%",
  },
  thumbnailContainer: {
    padding: theme.spacing(2),
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    minHeight: 200,
  },
  thumbnail: {
    maxHeight: "170px",
    maxWidth: "fit-content",
    margin: "auto",
  },
  name: {
    fontSize: "1rem",
  },
  favoriteIcon: {
    color: theme.palette.ternary.main,
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
});

const ProductCard = (props) => {
  const { classes, product } = props;
  const context = useContext(GlobalContext);

  const handleAddToCart = (e, product) => {
    context.addProductToCart(
      product,
      context.pushObject("open_interstitial", true)
    );
  };

  const handleAddToWishList = (e, product) => {
    if (check) {
      context.removeProductToWishList(
        product.id,
        context.pushObject("open_interstitial", false)
      );
    } else {
      context.addProductToWishList(
        product,
        context.pushObject("open_interstitial", false)
      );
    }
  };

  const check = context.wishList.find((c) => c.id === product.id);

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <div className={classes.thumbnailContainer}>
          <CardMedia
            component="img"
            alt={product.title}
            image={product.image}
            className={classes.thumbnail}
            title={product.title}
          />
        </div>
        <Typography gutterBottom component="h2" className={classes.name}>
          {product.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.desc}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.price} €
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton onClick={(e) => handleAddToWishList(e, product)}>
          {!check ? (
            <FavoriteBorderIcon className={classes.favoriteIcon} />
          ) : (
            <FavoriteIcon className={classes.favoriteIcon}></FavoriteIcon>
          )}
        </IconButton>
        <IconButton onClick={(e) => handleAddToCart(e, product)}>
          <ShoppingBasketIcon color="secondary" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default withStyles(useStyles)(ProductCard);
