import React, { Component } from 'react';
import './App.css';

 class App extends Component{
   data = [
     "Yutaka",
     "Ryuichi",
     "Mapa"
   ]
   constructor(props) {
     super(props);
     this.state= {
       list: this.data
     }
   }
   render(){
     return(
       <div>
          <h1>Show List</h1>
          <List title="リスト" data={this.data} />
       </div>
     )
   }
   
 }

 class List extends Component{
   number = 1;
   render(){
     let data =this.props.data;
     return(
       <div>
        <p>{this.props.title}</p>
        <ul>
        {data.map((item)=>
        <Item value={item} number={this.number++} key={item} />
        )
        }
        </ul>
       </div>
     )
   }
 }

 class Item extends Component{
   render(){
     return(
       <li>
        <span>[{this.props.number}]</span>
        {this.props.value}
       </li>
     )
   }
 }

export default App;
