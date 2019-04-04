import React, { Component } from 'react';

import { AuthUserContext } from '../Session';
import { withFirebase } from '../Firebase';
import MessageList from './MessageList';

import {
  Card,
  Message,
  Button,
  Loader,
  Form,
  Icon,
} from 'semantic-ui-react';

class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      loading: false,
      messages: [],
      limit: 5,
    };
  }

  componentDidMount() {
    this.onListenForMessages();
  }

  onListenForMessages = () => {
    this.setState({ loading: true });

    this.props.firebase
      .messages()
      .orderBy('createdAt')
      .limit(this.state.limit)
      .onSnapshot(snapshot => {
        const messageObject = snapshot.docs.map(i => i.data());

        if (messageObject) {
          const messageList = Object.keys(messageObject).map(key => ({
            ...messageObject[key],
            uid: key,
          }));

          this.setState({
            messages: messageList,
            loading: false,
          });
        } else {
          this.setState({ messages: null, loading: false });
        }
      });
  };

  componentWillUnmount() {
    // this.props.firebase.messages().off();

  }

  onChangeText = event => {
    this.setState({ text: event.target.value });
  };

  onCreateMessage = (event, authUser) => {
    this.props.firebase.messages().add({
      text: this.state.text,
      userId: authUser.uid,
      createdAt: Date.now(),
    });

    this.setState({ text: '' });

    event.preventDefault();
  };

  onEditMessage = (message, text) => {
    this.props.firebase.message(message.uid).set({
      ...message,
      text,
      editedAt: Date.now(),
    });
  };

  onRemoveMessage = uid => {
    this.props.firebase.message(uid).remove();
  };

  onNextPage = () => {
    this.setState(
      state => ({ limit: state.limit + 5 }),
      this.onListenForMessages,
    );
  };

  render() {
    const { users } = this.props;
    const { text, messages, loading } = this.state;
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <Card fluid={true}>
            <Card.Content>
              <Card.Description>
                {loading && <Loader active inline="centered" />}

                {!loading && messages && (
                  <Button
                    size="small"
                    positive
                    type="button"
                    onClick={this.onNextPage}
                  >
                    Load Older Messages
                  </Button>
                )}

                {messages && (
                  <MessageList
                    messages={messages.map(message => ({
                      ...message,
                      user: users
                        ? users[message.userId]
                        : { userId: message.userId },
                    }))}
                    onEditMessage={this.onEditMessage}
                    onRemoveMessage={this.onRemoveMessage}
                  />
                )}

                {!loading && !messages && (
                  <Message info>
                    <p>There are no messages ...</p>
                  </Message>
                )}

                {!loading && (
                  <Form
                    onSubmit={event =>
                      this.onCreateMessage(event, authUser)
                    }
                  >
                    <Form.TextArea
                      value={text}
                      onChange={this.onChangeText}
                      placeholder="Enter your message here..."
                    />
                    <Button primary type="submit">
                      Send <Icon name="send" />
                    </Button>
                  </Form>
                )}
              </Card.Description>
            </Card.Content>
          </Card>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default withFirebase(Messages);
