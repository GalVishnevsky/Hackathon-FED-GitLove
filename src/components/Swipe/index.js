import React, { Component } from 'react';
import './index.css';
import axios from 'axios';

const $ = window.$;

export class Swipe extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        $(".buddy").on("swiperight", function () {
            $(this).addClass('rotate-left').delay(700).fadeOut(1);
            $('.buddy').find('.status').remove();

            $(this).append('<div class="status like">Like!</div>');

            axios.post('https://gitlove.herokuapp.com/match', {
                userId: this.props.auth.uid,
                matchedId: this.props.id,
                result: true
            });

            if ($(this).is(':last-child')) {
                $('.buddy:nth-child(1)').removeClass('rotate-left rotate-right').fadeIn(300);
            } else {
                $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
            }
        });

        $(".buddy").on("swipeleft", function () {
            $(this).addClass('rotate-right').delay(700).fadeOut(1);
            $('.buddy').find('.status').remove();
            $(this).append('<div class="status dislike">Dislike!</div>');

            if ($(this).is(':last-child')) {
                $('.buddy:nth-child(1)').removeClass('rotate-left rotate-right').fadeIn(300);

                axios.post('https://gitlove.herokuapp.com/match', {
                    userId: this.props.auth.uid,
                    matchedId: this.props.id,
                    result: false
                });
            } else {
                $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
            }
        });
    }

    render() {
        const divStyle = {
            backgroundImage: 'url(' + this.props.pic + ')',
            display: 'block'
        };
        return (
            <div className="buddy" style={{ display: "block" }}>
                <div className="avatar" style={divStyle}>
                </div>
            </div>
        );
    }
}