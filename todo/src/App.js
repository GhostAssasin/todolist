import React from 'react'

class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.removeItem = this.removeItem.bind(this);
    this.state = {
      value: '',
      list: [],
      index: []
    };
  }

  removeItem (index) {
    let listnew = this.state.list;
    listnew.splice(index, 1);
    this.setState({list: listnew});
  }

  render(){
    return(
    <div>
      <h1>New todo: </h1>
      <input type="text" value={this.state.value} onChange = {(event) => this.setState({ value: event.target.value})} />
      <button type='submit' onClick = {({list}) => {      
        let listnew = this.state.list; 
        listnew.push(this.state.value); 
        let indexnew = this.state.index;
        indexnew.push(this.state.index.length + 1);
        this.setState({list: listnew, value: '', index: indexnew});
      }
        }>Add todo</button>

        <div>
        <TodoList list = {this.state.list} removeItem = {this.removeItem}/>
        </div>
    </div>
    
    )
    
  }
}
export default TodoApp;

function TodoList (props) {
    let items = props.list.map((item, index) => {
      if(item !== ''){ 
      return ( 
        <TodoListItem key={index} item={item} index={index} removeItem = {props.removeItem}/>
      );
    } else return null;
    });
    return (
      <ul className="list-group"> {items} </ul>
    );
}


function TodoListItem (props) {
  function onClickClose(){
    props.removeItem(props.index);
  }
    return(
      <li >
        <div >
          {props.item}    
          <button type="button" onClick = {onClickClose} >&times;</button>
        </div>
      </li>     
    );
}