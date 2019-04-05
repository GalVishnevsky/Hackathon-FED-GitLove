import React, {Component} from 'react';
import './index.css';
import axios from 'axios';
import {Header} from "semantic-ui-react";
import {Grid} from "semantic-ui-react/dist/commonjs/collections/Grid";
import {MatchFound} from '../MatchFound';

const $ = window.$;

export class Swipe extends Component {
  constructor(props) {
    super(props);
    this.swipe = false;
  }
  
  componentDidMount() {
    const self = this;
    
    $("#" + this.props.userId).on("swiperight", function(event) {
      // event.preventDefault()
      $(this).addClass('rotate-left').delay(700).fadeOut(1);
      $("#" + self.props.userId).find('.status').remove();
      
      $("#" + self.props.userId).append('<div class="status like">Like!</div>');            //
      axios.post('https://gitlove.herokuapp.com/match', {
        userId:    self.props.auth.uid,
        matchedId: self.props.userId
      }).then((response) => {
        
        if(response.data.match) {
          self.isMatched = true;
          self.setState({errors: null});
        }
      });
    });
    
    $("#" + this.props.userId).on("swipeleft", function(event) {
      // event.preventDefault()
      
      $(this).addClass('rotate-right').delay(700).fadeOut(1);
      $("#" + self.props.userId).find('.status').remove();
      $("#" + self.props.userId).append('<div class="status dislike">Dislike!</div>');
      
      // $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
      
    });
  }
  
  render() {
    const divStyle = {
      backgroundImage: 'url(' + this.props.pic + ')',
      display:         'block'
    };
    const age      = Math.random() * (+30 - 20) + +20;
    return (
      <div className="buddy" id={this.props.userId} style={{display: "block"}}>
        <div className="avatar" style={divStyle}>
        </div>
        <div className='score'>
                    <span className='inScore'>
                        {this.props.score}%
                    </span>
        </div>
        <Header as='h3' style={{backgroundColor: '#f9f9f9'}}>
          {this.props.username}, {age.toFixed(0)}
        </Header>
        <Header as='h4' style={{backgroundColor: '#f9f9f9'}}>
          {this.props.langs.join(', ')}
        </Header>
        <MatchFound IsMatched={this.isMatched}/>
      </div>
    );
  }
}