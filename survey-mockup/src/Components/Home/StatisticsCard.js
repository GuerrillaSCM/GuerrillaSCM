import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    card: {
      minWidth: 275,
    },
    body: {
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(1)
    }
}));

/*
    param: props.title
           props.value
*/
function StatisticsCard(props) {

    const classes = useStyles();

    return(
        <div>
            <Card>
                <CardContent>
                    <Typography variant="overline" gutterBottom>
                        {props.title}
                    </Typography>
                    <Typography variant="h3" gutterBottom className={classes.body}>
                        {props.value}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default StatisticsCard;