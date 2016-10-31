import React, { Component } from 'react';
import logo from '../logo.svg';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';
import ListTasks from '../components/ListTasks';

import './App.css';

const MuiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={MuiTheme}>
      <div>
        <AppBar title= "to do list"
          showMenuIconButton= {false}
          iconClassNameLeft={logo}
        />
        <ListTasks/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

