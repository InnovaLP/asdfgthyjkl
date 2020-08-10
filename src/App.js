import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Header from "./Header2";
import Content from "./Content"; 
import ContentPartidos from "./ContentPartidos";
import Divider from '@material-ui/core/Divider';


const App = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
        <Divider />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
        <Typography variant="h5" gutterBottom>
            Partidos destacados:
          </Typography>
          <Content />
          <Divider variant="middle" />
          <Grid item xs={false} sm={2} />
          <Typography variant="h5" gutterBottom>
            Todos los partidos de hoy:
          </Typography>
          <Divider />
          <ContentPartidos />
        </Grid>
        </Grid>

    </Grid>
  );
};

export default App;
