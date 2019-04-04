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
  Checkbox,
} from 'semantic-ui-react';
import {withAuthentication} from '../Session';

const ProfileSetUpPage = () => (
  <Grid centered columns={2}>
    <Grid.Column>
      <Header as="h2" textAlign="center">
        Set Up
      </Header>
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
    this.state = {...INITIAL_STATE};
  }
  
  onSubmit = event => {
    const {username, gitUsername, tenBisEmail, tenBisPassword} = this.state;
    
    return axios.post('http://172.168.168.67:5000/updateProfile', {
      userId: this.props.auth.uid,
      username,
      gitUsername,
      tenBisEmail,
      tenBisPassword
    })
      .then(() => {
        this.setState({error: null});
        this.props.history.push(ROUTES.HOME);
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
            <label>GitLove Username</label>
            <input
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="GitLove Username"
            />
          </Form.Field>
          <Form.Field>
            <label>Github Username</label>
            <input
              name="gitUsername"
              value={gitUsername}
              onChange={this.onChange}
              type="text"
              placeholder="Github Username"
            />
          </Form.Field>
          <Form.Field>
            <label>10Bis Email</label>
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
              <label>10Bis Password</label>
              <input
                name="tenBisPassword"
                value={tenBisPassword}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
              />
            </Form.Field>
          </Form.Group>
          <Button primary disabled={isInvalid} type="submit">
            Sign Up
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
