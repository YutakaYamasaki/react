// import React from 'react';
import React, { Component } from 'react'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <p>This is sample component</p>
//       <p>これはコンポーネントです。</p>
//     </div>

//   );
// }

// class App extends Component {
//   constructor(props) {
//     super();
//     this.title = props.title;
//     this.message = props.message;
//   }
//   render(){
//     return (
//       <div>
//         <h1>{this.title}</h1>
//         <p>{this.message}</p>
//       </div>

//     )
//   }
// }

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       msg: 'Hello Component.',
//     };

//     let timer = setInterval(() => {
//       this.setState((state)=>({
//         msg: state.msg +"aho"
//       }));
//     }, 100000);
//   }
//   render(){
//     return (
//       <div>
//         <h1>React</h1>
//         <p>{this.state.msg}</p>
//         <p>{this.props.msg}</p>
//       </div>
//     )

//   }
  
// }

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       counter: 0,
//       msg: 'count staart',
//       // flg: true,
//     };
//     this.doAction = this.doAction.bind(this);
//   }
//   doAction(e){
//     this.setState((state)=>({
//       counter: state.counter +1,
//       msg: 'count:' + state.counter,
//       // flg: !state.flg
//     }))
//   }
//   render(){
//     return(
//       <div>
//         <p>{this.state.msg}</p>
//         {/* {this.state.flg?
//           <p>count:{this.state.msg}</p>
//         :
//           <p>count:{this.state.msg}です。</p>
//         } */}
//         <button onClick={this.doAction}>Click</button>

//       </div>
//     )
//   }
// }
// class App extends Component {
//   data = [
//     "This is list sample",
//     "これはサンプル",
//     "配列"
//   ]
//   constructor(props){
//     super(props);
//     this.state = {
//       list:this.data
//     };
//   }

//   render(){
//     return(
//       <div>
//       <h1>Show List</h1>
//       <List title="サンプル・リスト" data={this.data} />
//       </div>
//     )
//   }
// }

// class List extends Component {
//   number = 1;
//   title = {
//     fontSize:"20pt",
//     fontWeight:"bold",
//     color:"blue"
//   };

//   render(){
//     let data = this.props.data;
//     return(
//       <div>
//         <p>{this.props.title}</p>
//         <ul>
//           {data.map((item)=>
//             <Item number={this.number++} value={item}
//             key={this.number} />
//           )}
//         </ul>
//       </div>
//     )
//   }
// }

// class Item extends Component {
//   render(){
//     return(
//       <li>
//         <span>[{this.props.number}]</span>
//         {this.props.value}
//       </li>
//     )
//   }
// }
// 
export default App;
