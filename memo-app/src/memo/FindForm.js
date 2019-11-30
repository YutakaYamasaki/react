import React,{Component} from 'react';
import { connect } from 'react-redux';
import {findMemo} from './Store';

class FindForm extends Component{
    constructor(props) {
        super();
        this.state = {
            find:''
        }
        this.doChange = this.doChange.bind(this);
        this.doAction = this.doAction.bind(this);
    }
    doChange(e){
        this.setState({
            find: e.target.value
        })
    }
    doAction(e){
        e.preventDefault();
        let action = findMemo(this.state.find);
        this.props.dispatch(action);
    }

    render(){
        return(
            <form onSubmit={this.doAction}>
                <input type="text" onChange={this.doChange} value={this.state.message} />
                <input type="submit" value="Find" />
            </form>
        )
    }
    
}

export default connect((state)=>state)(FindForm);