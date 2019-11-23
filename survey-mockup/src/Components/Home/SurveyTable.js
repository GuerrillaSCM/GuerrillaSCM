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
function SurveyTable() {

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
            { title: 'Name', field: 'name' },
            { title: 'Published Status', field: 'status' },
            { title: 'Date Created', field: 'dateCreated' },
            {
                title: 'Responses',
                field: 'responses',
                //type: 'numeric',
            },
        ],
        //Dummy data
        data: [
            { name: 'Test Survey 1', status: 'Yes', dateCreated: '11/21/2019', responses: 69 },
            { name: 'Test Survey 2', status: 'No', dateCreated: '11/16/2019', responses: 49 },
            { name: 'Test Survey 3', status: 'Yes', dateCreated: '11/10/2019', responses: 59 },
            { name: 'Test Survey 4', status: 'No', dateCreated: '11/10/2019', responses: 69 },
            { name: 'Test Survey 5', status: 'Yes', dateCreated: '11/15/2019', responses: 69 },
        ],

    });

    return (
        <div className={classes.root}>
            <MaterialTable
                title="Surveys"
                columns={state.columns}
                data={state.data}
                icons={tableIcons}
                actions={[
                    {
                        icon: () => <Edit />,
                        tooltip: 'Edit Survey',
                        onClick: (event, rowData) => alert("You saved " + rowData.name),
                    },
                    {
                        icon: () => <VisibilityIcon />,
                        tooltip: 'Preview Survey',
                    },
                    {
                        icon: () => <DeleteOutline />,
                        tooltip: 'Delete Survey',
                        onClick: (event, rowData) => alert("You saved " + rowData.name)
                    },
                ]}
                options={{
                    actionsColumnIndex: 4,
                }}
            />
        </div>
    );
}

export default SurveyTable;