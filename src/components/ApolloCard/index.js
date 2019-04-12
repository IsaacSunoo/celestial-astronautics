import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanel } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';

const ApolloCard = (props) => {
    const { classes, apollo } = props;
    // console.log('apollo', apollo)
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
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Learn more</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>{apollo.data[0].description}</Typography>
                </ExpansionPanelDetails>
            </ ExpansionPanel>
    </Card>
  )
}

ApolloCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = theme => ({
    card: {
        maxWidth: 345
    },
    media: {
        height: 240,
    },
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    }
});

export default withStyles(styles)(ApolloCard);