import React from 'react';
import firebase from '../../firebase'
import {connect} from 'react-redux';
import {Grid, Header, Icon, Dropdown, Image} from 'semantic-ui-react';

class UserPanel extends React.Component {
  state = {
    user: this.props.currentUser
  }

  // componentDidMount() {
  //   this.setState({ user:this.props.currentUser });
  // }
  // componentWillReceiveProps(nextProps){
  //   this.setState({user: nextProps.currentUser})
  // }

    dropdownOptions = () =>[
        {
            key: "user",
            text: <span>Singed in as <strong>{this.state.user.displayName}</strong></span>,
            disabled: true
        },
        {
            key:'avatar',
            text: <span>Change Avatar</span>
        },
        {
            key:'signout',
            // text:<span>Signout</span>
            text:<span onClick={this.handleSignout} >Signout</span>
        }
    ]
    handleSignout = () =>{
        firebase
        .auth()
        .signOut()
        .then(()=> console.log('signed out!'))
    }
    render(){
      // console.log(this.props.currentUser)
      const { user } = this.state;
        return(
        <Grid.Column>
          <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
            {/* App Header */}
            <Header inverted floated="left" as="h2">
              <Icon name="code" />
              <Header.Content>DevChat</Header.Content>
            </Header>
          {/* User Dropdown  */}
          <Header style={{ padding: "0.25em" }} as="h4" inverted>
            <Dropdown
              trigger={
              <span>
                <Image src={user.photoURL} spaced="right" avatar />
                {user.displayName}</span>}
              options={this.dropdownOptions()}
            />
          </Header> 
          </Grid.Row>

        </Grid.Column>
        )
    }
}
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(UserPanel);