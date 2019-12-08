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
function SurveyResultsTable() {

    const classes = useStyles();

    /* 
        //a potential way we can use objects
        const [state,setState] = React.useState({})
        const changeState = () => {
            setState(props.object);
        }
    */

    //dummy data. Separate column from data and were good
    const [state, setState] = React.useState({
        columns: [
            { title: 'Response Number', field: 'resNum' },
            { title: 'Question', field: 'question' },
            { title: 'Rating', field: 'stars' },
        ],

        //Dummy data
        data: [
            { resNum: 1, question: '[<Question from the survey goes here>]', stars: 3 },
            { resNum: 2, question: '[<Question from the survey goes here>]', stars: 3 },
            { resNum: 3, question: '[<Question from the survey goes here>]', stars: 4 },
            { resNum: 4, question: '[<Question from the survey goes here>]', stars: 2 },
            { resNum: 5, question: '[<Question from the survey goes here>]', stars: 3 },
            { resNum: 6, question: '[<Question from the survey goes here>]', stars: 5 },
            { resNum: 7, question: '[<Question from the survey goes here>]', stars: 3 },
            { resNum: 8, question: '[<Question from the survey goes here>]', stars: 4 },
            { resNum: 9, question: '[<Question from the survey goes here>]', stars: 3 },
            { resNum: 10, question: '[<Question from the survey goes here>]', stars: 5 },
        ],

    });

    return (
        <div className={classes.root}>
            <MaterialTable
                title="Survey Responses"
                columns={state.columns}
                data={state.data}
                icons={tableIcons}
                actions={[
                    {
                        icon: () => <VisibilityIcon />,
                        tooltip: 'View Details',
                    },
                ]}
                options={{
                    actionsColumnIndex: 4,
                }}
            />
        </div>
    );
}

export default SurveyResultsTable;