import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';

function mappingState(state){
  return state;
}
class App extends Component {
  constructor(props) {
    super();
    
  }
  render(){
    return (
      <div>
        <h1>Redux</h1>
        <Message />
        <Button />
      </div>
    )
  }
}

App = connect()(App);

class Message extends Component {
  render(){
    return (
      <p>{this.props.message}: {this.props.counter}</p>
    )
  }
}

Message = connect(mappingState)(Message);

class Button extends Component {
  constructor(props) {
    super(props);
    this.doAction = this.doAction.bind(this);
  }

  doAction(e){
    if(e.shiftKey){
      this.props.dispatch({type:'DECREMENT'});
    }else{
      this.props.dispatch({type:'INCREMENT'});
    }
  }
  render(){
    return(
      <button onClick={this.doAction}>Click</button>
    )
  }
}


Button = connect()(Button);
export default App;
