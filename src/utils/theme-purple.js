/**
 * @author Sylvana
 * first npm install @material-ui/core --save
 */

 import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
 import CssBaseline from '@material-ui/core/CssBaseline'

 const theme = createMuiTheme({
    palette: {
        primary: {
          light: '#af52bf',
          main: '#9c27b0',
          dark: '#6d1b7b',
          contrastText: '#fff',
        },
        secondary: {
          light: '#d7a8df',
          main: '#ce93d8',
          dark: '#906697',
          contrastText: '#fff',
        },
      },
    });


    // in the react.DOM render, place FIRST
    /* 
            <CssBaseline /> 
    
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
    */