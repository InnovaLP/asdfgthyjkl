import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

const Titulo = props => {
  const { title } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>

    </div>
  );
}
export default Titulo;
