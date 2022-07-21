import * as React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { Typography, withStyles, Box } from "@material-ui/core";

const useStyles = (theme) => ({
  icon: {
    fontSize: 45,
    marginRight: theme.spacing(2),
    color: theme.palette.ternary.main,
    fontWeight: 200,
  },
  title: {
    paddingBottom: theme.spacing(0.5),
    fontWeight: 500,
  },
  text: {
    lineHeight: 1.8,
  },
});

const HeartRow = (props) => {
  const { classes, title, text } = props;
  return (
    <Box sx={{ display: "flex", alignItems: "center", paddingBottom: 25 }}>
      <FavoriteBorderIcon className={classes.icon} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography className={classes.title} variant="subtitle1">
          {title}
        </Typography>
        <Typography className={classes.text} variant="body2">
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default withStyles(useStyles)(HeartRow);
