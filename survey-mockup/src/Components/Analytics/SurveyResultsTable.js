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
import { AnalyticsContextConsumer } from '../Context/AnalyticsContextClass'

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

    return (
        <div className={classes.root}>
            <AnalyticsContextConsumer>
                {({ analyticsObject }) => (
                    <div>
                    <MaterialTable
                        title="Survey Responses"
                        columns={analyticsObject.columns}
                        data={analyticsObject.responses}
                        icons={tableIcons}
                    //not sure if this is needed since we dont have anything here, unless
                    //we want to single out each response. But probably not this iteration
                    // **WE SHOULD GET THE AVERAGE STARS THO** 
                    // actions={[
                    //     {
                    //         icon: () => <VisibilityIcon />,
                    //         tooltip: 'View Details',
                    //     },
                    // ]}
                    // options={{
                    //     actionsColumnIndex: 4,
                    // }}
                    />
                    {/* {getArray(analyticsObject.responses)} */}
                    </div>
                )}
            </AnalyticsContextConsumer>
        </div>
    );
}

export default SurveyResultsTable;