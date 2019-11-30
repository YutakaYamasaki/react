import React, { Component } from 'react';
import firebase from '../../firebase'
import {Grid, Form, Segment, Button, Header, Message, Icon} from 'semantic-ui-react';
// Forth
import md5 from 'md5'
import { Link } from 'react-router-dom'

class Register extends Component {
    state ={
        username:'',
        email:'',
        password:'',
        passwordConfirmation:'',
        //second
        errors:[],
        loading: false,
        usersRef: firebase.database().ref('users')
    }
    handleChange = ( event ) => {
        this.setState({[event.target.name]: event.target.value })
    }

    // validation
    isFormValid = () =>{
        let errors = [];
        let error;

        if(this.isFormEmpty(this.state)){
            // throw error
            error = {message: 'Fall in all fields'};
            this.setState({ errors:errors.concat(error) });
            return false
        }else if(!this.isPasswordValid(this.state)){
            error = {message: 'Password is invalid'}
             this.setState({ errors:errors.concat(error) });
            return false
        }else{
            return true
        }
    }
    isFormEmpty = ({ username,email,password,passwordConfirmation }) => {
        return !username.length || !email.length || !password.length || !passwordConfirmation.length;
    }

    isPasswordValid = ({ password, passwordConfirmation }) => {
        if(password.length<6 || passwordConfirmation.length<6){
            return false;
        }else if(password !== passwordConfirmation){
            return false;
        }else{
            return true;
        }

    }

    displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>)


    handleSubmit = ( event ) => {
        // second if
        if(this.isFormValid()){
        // Third setstate
        this.setState({ errors: [], loading:true });
        event.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(createdUser => {
                createdUser.user.updateProfile({
                    displayName: this.state.username,
                    photoURL: `http://gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`
                })
                .then(() => {
                    // this.setState({ loading:false });
                    this.saveUser(createdUser).then(()=>{
                        console.log('user saved');
                    })

                })
                .catch((err) => {
                    console.error (err)
                    this.setState({ errors:this.setState.errors.concat(err), loading:true});
                })
                // console.log(createdUser);
                // this.setState({ loading:false });
            })
            .catch(err => {
                console.error(err);
                this.setState({ errors: this.state.errors.concat(err), loading:false });
            })
        }
    }

    handleInputError = (errors, inputName) =>{
        return errors.some(error=>
            error.message.toLowerCase().includes(inputName)
        ) ? 
        'error' 
        :
        ''
    }
    saveUser = createdUser =>{
        return this.state.usersRef.child(createdUser.user.uid).set({
            name: createdUser.user.displayName, 
            avatar: createdUser.user.photoURL
        });
    }

    render(){
        const { username, email, password, passwordConfirmation, errors, loading } = this.state;
        return(
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" icon color="orange" textAlign="center">
                        <Icon name="puzzle piece" color="orange" />
                        Register for devChat
                    </Header>
                    <Form size="large" onSubmit={this.handleSubmit}>
                        <Segment stacked>
                        <Form.Input fluid name="username" icon="user" iconPosition="left" placeholder="Username" onChange={this.handleChange}  type="text" value={username} />
                        <Form.Input fluid name="email" icon="mail" iconPosition="left" placeholder="Email Address" onChange={this.handleChange}  type="email" value={email} className={this.handleInputError(errors,'email')} />
                        <Form.Input fluid name="password" icon="lock" iconPosition="left" placeholder="Password" onChange={this.handleChange}  type="password" value={password} className={this.handleInputError(errors,'password')} />
                        <Form.Input fluid name="passwordConfirmation" icon="repeat" iconPosition="left" placeholder="Password Confirmation" onChange={this.handleChange}  type="password" value={passwordConfirmation} className={this.handleInputError(errors,'password')} />
                        <Button disabled={loading} className={loading ? 'loading' : ''} color="orange" fluid size="large">Submit</Button>
                        </Segment>
                    </Form>
                    {/* second */}
                    {errors.length > 0 && (
                        <Message error>
                            <h3>Error</h3>
                            {this.displayErrors(errors)}
                        </Message>
                    )}
                    <Message>Aleady user?<Link to="/login">Login</Link></Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Register;