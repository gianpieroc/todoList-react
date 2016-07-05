import style from './style.css';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import ListTask from '../ListTask/';
import Input from '../Input';

const MuiTheme = getMuiTheme ({
  palette: {
    accent1Color: deepOrange500
  },
});

class App extends React.Component {
  constructor(props){
    super(props);
    this.notMenu= false;
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={MuiTheme}>
        <div>
        <AppBar title= "To do List" 
        showMenuIconButton= {this.notMenu}
        />
        <ListTask />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
