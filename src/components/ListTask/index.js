import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import LinearProgress from 'material-ui/LinearProgress';

const style = {
  inputText:{
   marginLeft:50,
   marginRight:50,
   width: 400,
   marginTop:30,
  },
  gridList:{
    width: 400,
    height: 500,
    overflowY: 'auto',
    marginLeft: 50,
    marginRight: 50,
  },
};

class ListTask extends React.Component{
  constructor(){
    super();
    this.state ={
          tasks: ["Clear Underpants", "Date with monica"],
          completed: 0,
          currentTask: ''
          }
  }

  onChange(event){
    this.setState({
      currentTask: event.target.value
    });
  };

  verify(event){
    if(event.keyCode == 13 && this.state.currentTask != ''){
      this.state.tasks.push(event.target.value);
      this.setState({
        currentTask:' '
      });
    }
  };

  render(){
    const currentTask = <ListItem primaryText={this.state.currentTask}/> 

    const totalTasks = this.state.tasks.map((task) => 
      <ListItem leftCheckbox={<Checkbox/>} primaryText={task}/>
    );

    return(
    <div >
      <TextField style={style.inputText}
        hintText="Task"
        ref= "TaskField"
        onKeyDown= {this.verify.bind(this)}
        onChange={this.onChange.bind(this)}
          /><br />
          <List style={style.gridList}>
            <ListItem primaryText={this.state.currentTask}/>
          {totalTasks}
      </List>
      </div> 
    );
  }

}
export default ListTask;
