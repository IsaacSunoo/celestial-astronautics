import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const ApolloCard = (props) => {
    const { classes, apollo } = props;
    console.log('apollo', apollo)
  return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia className={classes.media} image={apollo.links[0].href} title="Apollo images" />
            <CardContent>
                <Typography gutterBottom variant="h6" component="h6">
                    {apollo.data[0].title}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
                Learn More
            </Button>
        </CardActions>
    </Card>
  )
}

ApolloCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    card: {
        maxWidth: 345
    },
    media: {
        height: 240,
    },
};

export default withStyles(styles)(ApolloCard);