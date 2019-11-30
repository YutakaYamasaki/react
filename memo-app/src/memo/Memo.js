import React, { Component } from 'react';
import { connect } from 'react-redux';


import Item from './Item';


class Memo extends Component {


  render(){
    let data;
    let n = 0;
    switch (this.props.mode){
      case 'default':
      data = this.props.data.map((value)=>(
        <Item key={value.message} value={value} index={n++} />
      ));
      break;

      case 'find':
      data = this.props.fdata.map((value)=>(
        <Item key={value.message} value={value} index={n++}/>
      ));
      break;


      case 'delete':
      data = this.props.data.map((value)=>(
        <Item key={value.message} value={value} index={n++} />
      ));
      break;


      default:
      data = this.props.data.map((value)=>(
        <Item key={value.message} value={value} index={n++} />
      ));
    }
    return (
      <table><tbody>{data}</tbody></table>
    );
  }
}
export default connect((state)=>state)(Memo);