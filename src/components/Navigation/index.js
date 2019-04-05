import React from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { Container, Menu } from 'semantic-ui-react';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <Menu pointing secondary>
    <Container>
      {/* <Menu.Item name="Landing" as={Link} to={ROUTES.LANDING} /> */}
      <Menu.Item name="home" as={Link} to={ROUTES.HOME} />
      <Menu.Item name="Account" as={Link} to={ROUTES.ACCOUNT} />
      <SignOutButton />
    </Container>
  </Menu>
);

const NavigationNonAuth = () => (
  <Menu pointing secondary>
    <Container>
      {/* <Menu.Item name="home" as={Link} to={ROUTES.LANDING} /> */}
      <Menu.Menu position="right">
        <Menu.Item name="Sign in" as={Link} to={ROUTES.SIGN_IN} />
      </Menu.Menu>
    </Container>
  </Menu>
);

export default Navigation;
