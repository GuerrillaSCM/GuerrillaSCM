import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MaterialTable from 'material-table'
import { forwardRef } from 'react';

import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { HomeContextConsumer } from '../Context/HomeContextClass';

//Test 
import {Link} from 'react-router-dom'
import AnalyticsPage from '../Analytics/AnalyticsPage'
import { useHistory } from "react-router-dom";

const tableIcons = {
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        margin: theme.spacing(3),
    },
    texts: {
        textAlign: 'left',
        margin: theme.spacing(1),
    },
}))


/*
    param: Optional: props.columns
           props.data (Could be an object that contains the name, status, datacreated........)
*/
function SurveyTable() {

    let history = useHistory();

    const classes = useStyles();


    /*
        OnClick we could either put the userId that was clicked 
        or pass the id prop through the history.
    */
    const renderPage = () => {
        history.push('/analytics')
    }

    /* 
        //a potential way we can use objects
        const [state,setState] = React.useState({})
        const changeState = () => {
            setState(props.object);
        }
    */

    return (
        <div className={classes.root}>
            <HomeContextConsumer>
                {({homeObject}) => (
                    <MaterialTable
                        title="Surveys"
                        columns={homeObject.columns}
                        data={homeObject.surveys}
                        icons={tableIcons}
                        actions={[
                            {
                                icon: () => <Edit />,
                                tooltip: 'Edit Survey',
                                onClick: (event, rowData) => alert("This is a placeholder " + rowData.name),
                            },
                            {
                                icon: () => <VisibilityIcon />,
                                tooltip: 'View Survey Analytics',
                                onClick: (event, rowData) => history.push('/analytics/'+ rowData.key),
                            },
                            {
                                icon: () => <DeleteOutline />,
                                tooltip: 'Delete Survey',
                                onClick: (event, rowData) => alert("This is a placeholder " + rowData.key)
                            },
                        ]}
                        options={{
                            //index of actions column in the table
                            actionsColumnIndex: 4,
                        }}
                    />
                )}
            </HomeContextConsumer>
        </div>
    );
}

export default SurveyTable;