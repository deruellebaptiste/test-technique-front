import DefaultLayaout from "../../components/DefaultLayout";
import {
  withStyles,
  Container,
  Grid,
  Typography,
  Box,
} from "@material-ui/core";
import ProductsList from "../../components/boutique/ProductsList";
import { useContext } from "react";
import GlobalContext from "../../state/global-context";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

const useStyles = (theme) => ({
  root: { marginBottom: theme.spacing(3), minHeight: "100%" },
  h1: {
    margin: theme.spacing(5, 0),
  },
  filterTitle: {
    backgroundColor: theme.palette.primary,
    color: theme.palette.primary.main,
  },
  filterListItem: {
    paddingLeft: 0,
  },
  icon: {
    fontSize: 300,
    marginRight: 20,
    color: "#f7b851",
  },
});

const WishList = (props) => {
  const { classes } = props;
  const context = useContext(GlobalContext);
  const wishList = context.wishList;

  console.log("context", context);

  return (
    <DefaultLayaout>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container justifyContent={"center"}>
          <Grid item>
            <Typography variant="h3" component="h1" className={classes.h1}>
              Wish List
            </Typography>
          </Grid>
        </Grid>

        <Grid container justifyContent={"center"}>
          <Grid item xs={12} md={9} className={classes.productsListContainer}>
            {wishList.length > 0 ? (
              <ProductsList products={wishList} />
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <HeartBrokenIcon className={classes.icon} />
                <Typography variant="h4" color="secondary">
                  Vous n'avez aucun article dans votre wish list :(
                </Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </DefaultLayaout>
  );
};
export default withStyles(useStyles)(WishList);
