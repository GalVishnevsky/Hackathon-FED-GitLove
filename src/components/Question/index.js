import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';

import {withFirebase} from '../Firebase';

import gay from '../../assets/gay.svg';
import hetero from '../../assets/hetero.svg';
import lesbian from '../../assets/lesbian.svg';
import trans from '../../assets/trans.svg';

import {
  Grid, Header, Divider, Image,
} from 'semantic-ui-react';
import withAuthentication from '../Session/withAuthentication';

const questions = [
  {
    image:   ``,
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
    label:   `What is your sexual orientation?`,
    answers: [{
      value: 'male',
      image: ``
    },
      {
        value: 'female',
        image: ``
      }, {
        value: 'both',
        image: ``
      }]
  },
  {
    image:   ``,
    label:   `What is your sexual orientation?`,
    answers: [{
      value: 'male',
      image: ``
    },
      {
        value: 'female',
        image: ``
      }, {
        value: 'both',
        image: ``
      }]
  }
];

class QuestionViewBase extends Component {
  constructor(props) {
    super();
    
    this.state = {error: null};
  }
  
  render() {
    this.question = questions[0];
    
    return (
      <Grid centered columns={2}>
        <Grid.Row textAlign="center">
          <form onSubmit={this.onSubmit} className="inline">
            <Image src={this.question.image} size='medium' circular/>
            <Header as='h2'>{this.question.label}</Header>
            <Divider></Divider>
            
            <Grid>
              <Grid.Row columns={2}>
                {this.question.answers.map((answer) => {
                  // Return the element. Also pass key
                  return (
                    <Grid.Column key={answer.value}>
                      <Image src={answer.image} className={this.selectedAnswer === answer.value? '' : 'clickable no-fill'}
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
    this.selectedAnswer = answer;
    this.setState({errors: null});
  }
}

const QuestionView = compose(
  withRouter, withFirebase, withAuthentication
)(QuestionViewBase);

export {QuestionView};
