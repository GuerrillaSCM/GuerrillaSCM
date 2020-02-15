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

//Test 
import { useHistory } from "react-router-dom";

//redux
import * as actionTypes from '../../store/actions/actions';
import { useDispatch, useSelector } from "react-redux";
import * as homeActions from '../../store/actions/homeActions';

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
    UPDATE: removed columns from the app state since it doesnt really change
    Removed the home context consumer here as well.
    Also, we used to reload the page when we delete an existing survey, we dont do that anymore
*/
function SurveyTable() {

    const staticColumns = {
        columns: [
            { title: 'Name', field: 'title' },
            { title: 'Published Status', field: 'published' },
            { title: 'Date Created', field: 'creationTime' },
        ]
    }

    let history = useHistory();

    const classes = useStyles();

    const dispatch = useDispatch();

    const homeTest = useSelector(state => state.home);


    const switchPage = (url, id, page) => {
        history.push(
            url + id
        )
        //change state of currentPage
        dispatch(actionTypes.switchPage(page));
    }

    return (
        <div className={classes.root}>          
                    <MaterialTable
                        title="Surveys"
                        columns={staticColumns.columns}
                        data={homeTest.surveys}
                        icons={tableIcons}
                        actions={[
                            {
                                icon: () => <Edit />,
                                tooltip: 'Edit Survey',
                                onClick: (event, rowData) => switchPage('/create/', rowData._id,1),
                            },
                            {
                                icon: () => <VisibilityIcon />,
                                tooltip: 'View Survey Analytics',
                                onClick: (event, rowData) => switchPage('/analytics/', rowData._id,2),
                            },
                            {
                                icon: () => <DeleteOutline />,
                                tooltip: 'Delete Survey',
                                onClick: (event, rowData) => {
                                    if (window.confirm(`Delete "${rowData.title}" survey?`))
                                        dispatch(homeActions.deleteSurvey(rowData._id))
                                }
                            },
                        ]}
                        options={{
                            //index of actions column in the table
                            actionsColumnIndex: 4,
                        }}
                    />
        </div>
    );
}

export default SurveyTable;