import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';

import {withFirebase} from '../Firebase';

import gay from '../../assets/gay.svg';
import hetero from '../../assets/hetero.svg';
import lesbian from '../../assets/lesbian.svg';
import trans from '../../assets/trans.svg';

import cat from '../../assets/cat.svg';
import dog from '../../assets/dog.svg';
import duck from '../../assets/duck.svg';
import fish from '../../assets/fish.svg';

import {
  Grid, Header, Divider, Image,
} from 'semantic-ui-react';
import withAuthentication from '../Session/withAuthentication';
import * as ROUTES from '../../constants/routes';

const questions = [
  {
    label:   `What is your sexual orientation?`,
    answers: [{
      value: 'hetero',
      image: hetero
    },
      {
        value: 'gay',
        image: gay
      }, {
        value: 'lesbian',
        image: lesbian
      }, {
        value: 'trans',
        image: trans
      }]
  },
  {
    image:   ``,
    label:   `What is favorite animal?`,
    answers: [{
      value: 'cat',
      image: cat
    },
      {
        value: 'dog',
        image: dog
      }, {
        value: 'duck',
        image: duck
      }, {
        value: 'fish',
        image: fish
      }]
  }];

class QuestionViewBase extends Component {
  constructor(props) {
    super();
    this.question = questions.shift();
  }
  
  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Row textAlign="center">
          <form onSubmit={this.onSubmit} className="inline">
            <Header as='h2'>{this.question.label}</Header>
            <Divider></Divider>
            
            <Grid>
              <Grid.Row columns={2}>
                {this.question.answers.map((answer) => {
                  // Return the element. Also pass key
                  return (
                    <Grid.Column key={answer.value}>
                      <Image src={answer.image}
                             className={this.selectedAnswer === answer.value ? '' : 'clickable no-fill'}
                             onClick={this.onAnswerClick.bind(this, answer.value)}/>
                    </Grid.Column>)
                })}
              </Grid.Row>
            </Grid>
          
          </form>
        </Grid.Row>
      </Grid>
    );
  }
  
  onAnswerClick(answer) {
    if(answer) {
      this.question = questions.shift();
      this.setState({errors: null});
      
      if(!this.question) {
        this.props.history.push(ROUTES.MATCH);
      }
    }
  }
}

const QuestionView = compose(
  withRouter, withFirebase, withAuthentication
)(QuestionViewBase);

export {QuestionView};
