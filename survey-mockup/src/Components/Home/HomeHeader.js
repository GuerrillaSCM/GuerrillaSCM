import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import StatisticsCard from './StatisticsCard'
import Grid from '@material-ui/core/Grid'
import { HomeContextConsumer } from '../Context/HomeContextClass'


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
/*
    param: props.title (Total Surveys Created......)
           props.value (Equivalent value)
    
    onClick listener for create a new survey also should be here
*/
function HomeHeader(props) {

    const classes = useStyles();

    //get all surveys that say is published true...
    const getAllActiveSurveys = (surveys) => {
        //something like this
        //surveys.map(survey => {if(survey.published === true) activeSurvey++;})
    }

    return (
        <Paper className={classes.root}>
            <HomeContextConsumer>
                {({homeObject}) => (
                    <div className={classes.texts}>
                        <Typography variant="h5" gutterBottom >
                Welcome Back, <span>{homeObject.userName}</span>
                        </Typography>
                        <Divider className={classes.distance} />
                        <Typography variant="overline" gutterBottom>

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
                                <StatisticsCard title="Total Surveys Created" value={homeObject.surveys.length} />
                            </Grid>
                            <Grid item xs={4}>
                                <StatisticsCard title="Total Active Surveys" value="0" />
                            </Grid>
                            <Grid item xs={4}>
                                <StatisticsCard title="Total Survey Responses" value="0" />
                            </Grid>
                        </Grid>
                    </div>
                )}
            </HomeContextConsumer>
        </Paper>

    );
}

export default HomeHeader;