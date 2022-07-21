import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Badge,
  Box,
  Menu,
  MenuItem,
} from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Link from "next/link";
import Interstitial from "../Interstitial";
import { useContext, useState, useEffect } from "react";
import GlobalContext from "../../state/global-context";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@material-ui/core";

const useStyles = (theme) => ({
  toolbar: {
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
  },
  cartIcon: {
    color: theme.palette.light,
  },
});

const Header = (props) => {
  const { classes } = props;
  const context = useContext(GlobalContext);
  const cart = context.cart;
  const wishList = context.wishList;

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      color: "white",
      backgroundColor: theme.palette.ternary.main,
    },
  }));

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    context.pushObject("open_interstitial", true);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [width, setWidth] = useState(null);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 425 && width !== null;

  return (
    <>
      <header className={classes.root}>
        <AppBar position="static" elevation={0}>
          <Container maxWidth="lg">
            <Toolbar className={classes.toolbar}>
              {isMobile ? (
                <div>
                  <IconButton
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <MenuIcon className={classes.cartIcon} />
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <Link href="/" passHref>
                        <a>
                          <Typography className={classes.title}>
                            Home
                          </Typography>
                        </a>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link href="/boutique" passHref>
                        <a>
                          <Typography className={classes.title}>
                            Boutique
                          </Typography>
                        </a>
                      </Link>
                    </MenuItem>
                  </Menu>
                </div>
              ) : (
                <>
                  <Link href="/" passHref>
                    <a>
                      <Typography variant="h4" className={classes.title}>
                        SuperShop
                      </Typography>
                    </a>
                  </Link>
                  <Link href="/boutique" passHref>
                    <a>
                      <Typography variant="h6" className={classes.title}>
                        Boutique
                      </Typography>
                    </a>
                  </Link>
                </>
              )}

              <Box>
                <Link href="/wishList" passHref>
                  <IconButton>
                    <StyledBadge
                      overlap="rectangular"
                      badgeContent={wishList.length}
                      color="primary"
                    >
                      <FavoriteBorderIcon className={classes.cartIcon} />
                    </StyledBadge>
                  </IconButton>
                </Link>
                <IconButton onClick={toggleDrawer(!context.open_interstitial)}>
                  <StyledBadge overlap="rectangular" badgeContent={cart.length}>
                    <ShoppingBasketIcon className={classes.cartIcon} />
                  </StyledBadge>
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
      <Interstitial />
    </>
  );
};

export default withStyles(useStyles)(Header);
