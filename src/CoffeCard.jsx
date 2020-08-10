import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import { /*Avatar, */IconButton, CardMedia } from "@material-ui/core";

const CoffeCard = props => {
  const {  title, liga,  imageUrl } = props;
  return (
    <Card>
      <CardHeader
        // avatar={<Avatar src={avatarUrl} />}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        // title={liga}
        subheader={liga}
      />
      <CardMedia style={{ height: "150px" }} image={imageUrl} />
      <CardContent>
        <Typography variant="body2" component="p">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">BUY NOW</Button>
        <Button color="secondary" /*size="small"*/>OFFER</Button>
      </CardActions>
    </Card>
  );
};

export default CoffeCard;
