import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import {withFirebase} from '../Firebase';

import {
  Grid,
  Header, Modal, Image,
} from 'semantic-ui-react';
import withAuthentication from "../Session/withAuthentication";

import linux from '../../assets/linux.png';
import nodejs from '../../assets/nodejs.png';
import dog from '../../assets/dog.png';
import ovad from '../../assets/ovad.png';

const images = [
  {
    image: linux,
    label: 'Linux'
  },
  {
    image: nodejs,
    label: 'NodeJS'
  },
  {
    image: dog,
    label: 'Dog Friendly'
  },
  {
    image: ovad,
    label: 'Ovad'
  },
];

class MatchFoundBase extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      error:      null,
      hasFetched: false,
      swipes:     []
    };
  }
  
  render() {
    
    return (
      <Modal open={this.props.IsMatched}>
        <Modal.Content image>
          <Header as="h1" textAlign='center' className="pink-text">It's a Merge!</Header>
          <Header as="h3" textAlign='center'>In Common:</Header>
          <Grid>
            <Grid.Row columns={2}>
              {images.map((image, index) => {
                // Return the element. Also pass key
                return (
                  <Grid.Column key={index}>
                    <Image src={image.image} size="small"
                           className='question-image'/>
                    <Header textAlign='center'
                      as='h3'>{image.label}</Header>
                  </Grid.Column>)
              })}
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
    );
  }
}

const MatchFound = compose(
  withRouter, withFirebase, withAuthentication
)(MatchFoundBase);

export {MatchFound};
