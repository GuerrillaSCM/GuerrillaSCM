import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import SurveyIcon from '@material-ui/icons/Assignment';
import AnalyticsIcon from '@material-ui/icons/Assessment';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SurveyPage from '../Survey/SurveyCreationPage';
import HomePage from '../Home/HomePage';
import Container from '@material-ui/core/Container';
import AnalyticsPage from '../Analytics/AnalyticsPage';

import { Route, Link, Redirect } from 'react-router-dom';

//redux
import {useSelector, useDispatch} from 'react-redux';
import * as actionTypes from '../../store/actions/actions'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.primary.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const pageIndex = useSelector(state => state.appWide);

  const dispatch = useDispatch();

  /*
    We could also use the current pages url to evaluate which value to switch to

    FIXME: this will do a dispatch
  */
  const handleChange = (event, newValue) => {
    dispatch(actionTypes.switchPage(newValue));
    //setValue(newValue);
  };

  const testHandler = () => {

  }

  const renderPage = (page) => {
    return(
      <Container maxWidth="lg">
        <Container maxWidth="lg">
        {page}
        </Container>
      </Container>
    );
  }

  const getCurrentValue = (currIndex) => {
      console.log("Index: " + currIndex);
  }

  return (
    <div className={classes.root}>
      {/* <Redirect exact from="/" to="home" /> */}
      <AppBar position="static" color="primary">
        {/*<Container maxWidth="lg"> */}
          <Tabs
          //value should now be a useSelector or someshit
            value={pageIndex.page_index}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            aria-label="scrollable force tabs example"
          >
            {/* Doing it this way reloads the page all the time 

            <Tab label="Home" href="/home" icon={<HomeIcon />} {...a11yProps(0)} />   
            
            FIXME 
              Fix the margins of each rendered page. It looks aweful
            */}
            {/*Tabs show the icons*/ }
            <Tab label="Home" to="/" component={Link} icon={<HomeIcon />} {...a11yProps(0)} />
            <Tab label="Survey Creation" to="/create" component={Link} icon={<SurveyIcon />} {...a11yProps(1)} />
            <Tab label="Analytics" to="/analytics" component={Link} icon={<AnalyticsIcon />} {...a11yProps(2)} />
          </Tabs>
        {/* </Container> */}
      </AppBar>

      <Route path="/" exact component={HomePage}/>
      <Route path="/create" component={SurveyPage}/>
      <Route path="/analytics" component={AnalyticsPage}/>

      
        {/* THIS DOESNT CHANGE THE ROUTES IN THE URL BAR so its basically doing nothing
        
        <TabPanel value={value} index={0} >
          <Link to='/home' exact component={HomePage}></Link>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Link to='/create' exact component={() => <SurveyPage />}></Link>
        </TabPanel>
        <TabPanel value={value} index={2} >
          <Link to='/analytics' exact component={() => <AnalyticsPage />}></Link>
        </TabPanel> */}
    </div>
  );
}