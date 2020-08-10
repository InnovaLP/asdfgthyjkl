import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const TextButtons = props => {
  const { href } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button href={href} >Abrir</Button>
      <Button color="primary">Abrir</Button>
      <Button color="secondary">Abrir</Button>

    </div>
  );
}
export default TextButtons;