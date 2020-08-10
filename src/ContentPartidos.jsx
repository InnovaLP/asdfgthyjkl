import React from "react";
import Titulo from "./Titulo";
import Botones from "./Botones";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import partidosMakerList from "./partidos";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

const ContentPartidos = () => {
  const classes = useStyles();
  const getPartidosMakerTitle = partidosMakerObj => {
    
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Titulo {...partidosMakerObj} />
              <Botones {...partidosMakerObj} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  };

  return (
    <Grid container spacing={2}>
      {partidosMakerList.map(partidosMakerObj => getPartidosMakerTitle(partidosMakerObj))}
    </Grid>
  );
};

export default ContentPartidos;
