import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
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
    marginAlign: {
        marginLeft: theme.spacing(1),
      },
}))


function AnalyticsHeader(props) {

    const classes = useStyles();

    return(
        
            <Paper className={classes.root}>
                <div className={classes.texts}>
                <Typography variant="h5" gutterBottom >
                    Analytics: <span>{props.title}</span>
                </Typography>

                <Divider className={classes.distance}/>

                <React.Fragment>
                    <Grid container spacing={1} direction="column" alignItems="flex-start">
                        <Grid item>     
                            <Button 
                            /*
                            TODO:
                            onClick={  }
                            */
                            variant="contained"
                            color="secondary"
                            size="large"
                            className={classes.marginAlign}
                            >Embed
                            </Button>
                            <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            className={classes.marginAlign}>Edit</Button>
                            <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            className={classes.marginAlign}>Delete</Button>
                            <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            className={classes.marginAlign}>Close</Button>
                            <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            className={classes.marginAlign}>Survey Preview</Button>
                        </Grid>
                    </Grid>
                </React.Fragment>

                <div className={classes.distance}></div>
                {/*<Divider className={classes.distance}/>
                <Typography variant="overline" guttermBottom>
                    Here are your current survey statistics
                </Typography>*/}
                </div>
            </Paper>
       
    );
}

export default AnalyticsHeader;