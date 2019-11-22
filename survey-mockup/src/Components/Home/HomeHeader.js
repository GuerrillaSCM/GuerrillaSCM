import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import StatisticsCard from './StatisticsCard'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      margin: theme.spacing(5),
    },
    texts: {
        textAlign: 'left',
        margin: theme.spacing(1),
    },
    distance: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    gridRoot: {
        flexGrow: 1,
    },
}))


//should receive user statistics
function HomeHeader(props) {

    const classes = useStyles();

    return(
        
            <Paper className={classes.root}>
                <div className={classes.texts}>
                <Typography variant="h5" gutterBottom >
                    Welcome Back, <span>User!</span>
                </Typography>
                <Divider className={classes.distance}/>
                <Typography variant="overline" guttermBottom>
                   
                </Typography>
                <Button color="primary" variant="contained">
                    Create A New Survey
                </Button>
                <div className={classes.distance}></div>
                {/*<Divider className={classes.distance}/>
                <Typography variant="overline" guttermBottom>
                    Here are your current survey statistics
                </Typography>*/}
                <Grid container className={classes.gridRoot} spacing={3}>
                    <Grid item xs={4}>
                    <StatisticsCard title="Total Surveys Created" value="5"/>
                    </Grid>
                    <Grid item xs={4}>
                    <StatisticsCard title="Total Active Surveys" value="3"/>
                    </Grid>
                    <Grid item xs={4}>
                    <StatisticsCard title="Total Survey Responses" value="69"/>
                    </Grid>
                </Grid>
                </div>
            </Paper>
       
    );
}

export default HomeHeader;