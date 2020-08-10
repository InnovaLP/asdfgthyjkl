import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    textAlign: 'center',
    flex: 1
  },
  root: {
    textAlign: 'center',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <div >
          <Typography textAlign="center" m={1} className={classes.typographyStyles}>
            PirloTV
          </Typography>
        </div>
        <SportsSoccerIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
