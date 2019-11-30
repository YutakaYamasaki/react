import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component{
    render(){
        let d = this.props.value.created;
        let f = d.getHours()+ ':' + d.getMinutes() + ':' + d.getSeconds();
        return(
            <tr><th>No. {this.props.index}</th>
            <td>{this.props.value.message}</td>
            <td>{f}</td>
            </tr>
        );
    }
}
export default connect()(Item);