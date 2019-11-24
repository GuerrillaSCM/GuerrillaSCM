//Probably configure the routing stuff here.
//navbar will be static on top
import React from 'react';
import NavBar from '../Header/NavBar'
import {createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
      primary: {main: '#981E32'},
      secondary: { main: '#53565A'}
    },
  });

const container = () => {
    return(
        <div className="">
            <MuiThemeProvider theme={theme}>
                <NavBar/>
            </MuiThemeProvider>
        </div>
    );
}

export default container;