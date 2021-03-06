import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import {withFirebase} from '../Firebase';
import * as ROUTES from '../../constants/routes';
import axios from 'axios';

import {
  Form,
  Button,
  Grid,
  Header,
  Message,
} from 'semantic-ui-react';
import {withAuthentication} from '../Session';

const ProfileSetUpPage = () => (
  <Grid centered columns={1}>
    <Grid.Column textAlign="center">
      <SignUpForm/>
    </Grid.Column>
  </Grid>
);

const INITIAL_STATE = {
  username:    '',
  email:       '',
  passwordOne: '',
  passwordTwo: '',
  isAdmin:     false,
  error:       null,
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    
    this.state = this.props;
    this.state = {...INITIAL_STATE, ...{
      facebookUser: JSON.parse(localStorage.getItem("facebookData") || {})
    }};

    this.state.username = this.state.facebookUser.name;
  }
  
  onSubmit = event => {
    const {username, gitUsername, tenBisEmail, tenBisPassword} = this.state;
    
    return axios.post('https://gitlove.herokuapp.com/updateProfile', {
      userId: this.props.auth.uid,
      username,
      gitUsername,
      tenBisEmail,
      tenBisPassword
    })
      .then(() => {
        this.setState({error: null});
        this.props.history.push(ROUTES.QUESTION);
      })
      .catch(error => {
        if(error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }
        
        this.setState({error});
      })
  };
  
  onChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };
  
  render() {
    const {
            gitUsername,
            username,
            tenBisEmail,
            tenBisPassword,
            error,
          } = this.state;
    
    const isInvalid =
            tenBisPassword === '' ||
            tenBisEmail === '' ||
            gitUsername === '';
    
    return (
      <div>
        {error && (
          <Message negative>
            <p>{error.message}</p>
          </Message>
        )}
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <img className="profilePic" src={`https://graph.facebook.com/${this.state.facebookUser.id}/picture?width=800`} />
            <h1 id="welcomeMessage">
              Hi, {this.state.facebookUser.name}
            </h1>
            <label className="signUpMessage">
              Let's connect to GitHub and 10bis
            </label>
            <input
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="GitLove Username"
            />
          </Form.Field>
          <Form.Field>
            <input
              name="gitUsername"
              value={gitUsername}
              onChange={this.onChange}
              type="text"
              placeholder="Github Username"
            />
          </Form.Field>
          <Form.Field>
            <input
              name="tenBisEmail"
              value={tenBisEmail}
              onChange={this.onChange}
              type="text"
              placeholder="10Bis Email"
            />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field>
              <input
                name="tenBisPassword"
                value={tenBisPassword}
                onChange={this.onChange}
                type="password"
                placeholder="10Bis Password"
              />
            </Form.Field>
          </Form.Group>
          <Button primary disabled={isInvalid} type="submit" className="signUpButton">
            Connect
          </Button>
        </Form>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SET_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(withAuthentication(SignUpFormBase)));

export default ProfileSetUpPage;

export {SignUpForm, SignUpLink};
