import * as React from "react";
import HeartRow from "./heartRow";

import { CardMedia, withStyles, Box } from "@material-ui/core";

const data = [
  {
    title: "La meilleure box beauté",
    text: [
      "Déjà ",
      <strong>200 000 abonnés</strong>,
      " sont conquis par la ",
      <strong>box beauté n°1 en France.</strong>,
    ],
  },
  {
    title: "La flexibilité",
    text: [
      "Profitez d' une formule d' abonnement ",
      <strong>sans engagement</strong>,
      " et modifiable en un clic",
    ],
  },
  {
    title: "Le bon plan beauté",
    text: [
      "Recevez une sélection de produits pour 13,90€ par mois, livraison incluse et bénéficiez de ",
      <strong>-15% sur notre eshop.</strong>,
    ],
  },
  {
    title: "La crème de la crème",
    text: [
      "Les produits des ",
      <strong>plus grandes marques</strong>,
      " se glissent dans votre box beauté personnalisée selon votre profil.",
    ],
  },
];
const useStyles = (theme) => ({
  parentBox: {
    borderRadius: 15,
    borderColor: "#F4F5F7",
    border: 2,
    borderStyle: "solid",
    overflow: "hidden",
  },
  test: {
    paddingLeft: theme.spacing(1.5),
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(4),
    },
    justifyContent: "center",
    paddingRight: theme.spacing(1.5),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    "& > :nth-child(1)": {
      paddingBottom: theme.spacing(6),
    },
    "& > :nth-child(4)": {
      paddingBottom: 0,
    },
  },
});

const HomeDescription = (props) => {
  const { classes } = props;
  return (
    <Box
      sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
      className={classes.parentBox}
    >
      <Box sx={{ display: "flex", minWidth: "50%" }}>
        <CardMedia
          component="img"
          alt="image"
          title="Contemplative Reptile"
          image="static/images/homepage-box-image.jpg"
          className={classes.thumbnail}
        />
      </Box>
      <Box
        className={classes.test}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        {data.map((row, index) => (
          <HeartRow title={row.title} text={row.text} key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default withStyles(useStyles)(HomeDescription);
