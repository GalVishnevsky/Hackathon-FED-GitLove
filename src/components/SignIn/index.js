import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';

import {withFirebase} from '../Firebase';
import * as ROUTES from '../../constants/routes';

import {
  Grid,
  Button,
  Header,
  Icon,
  Message,
} from 'semantic-ui-react';

const SignInPage = () => (
  <Grid centered columns={1}>
    <Grid.Column textAlign="center">
      <img src="/images/logo.png" id="logo"></img>
      <SignInFacebook textAlign="center"/>
    </Grid.Column>
  </Grid>
);

const ERROR_CODE_ACCOUNT_EXISTS =
        'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

class SignInFacebookBase extends Component {
  constructor(props) {
    super(props);
    
    this.state = {error: null};
  }
  
  onSubmit = (event) => {
    let socialAuthUser;
    
    this.props.firebase.doSignInWithFacebook()
      .then((authUser) => {
        socialAuthUser = authUser;
        return this.props.firebase.user(authUser.user.uid).get();
      })
      .then(
        (userDocument) => {
          debugger
          if(!userDocument.exists) {
            return this.props.firebase.user(socialAuthUser.user.uid).set({
                        name:      socialAuthUser.additionalUserInfo.profile.name,
                        facebookEmail: socialAuthUser.additionalUserInfo.profile.email
                      });
          }
        }
      )
      .then(() => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.SET_UP);
      })
      .catch(error => {
        if(error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }
        
        this.setState({ error });
      });
    
    event.preventDefault();
  };
  
  render() {
    const {error} = this.state;
    
    return (
      <form onSubmit={this.onSubmit} className="inline">
        <Button type="submit" className="facebookLogin">
          <Icon name="facebook"/> Connect with Facebook
        </Button>
        
        {error && (
          <Message negative>
            <p>{error.message}</p>
          </Message>
        )}
      </form>
    );
  }
}

const SignInFacebook = compose(
  withRouter, withFirebase
)(SignInFacebookBase);

export default SignInPage;

export {SignInFacebook};
