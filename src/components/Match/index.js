import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import axios from 'axios'
import {withFirebase} from '../Firebase';
import * as ROUTES from '../../constants/routes';

import {
    Grid,
    Button,
    Header,
    Icon,
    Message,
} from 'semantic-ui-react';
import withAuthentication from "../Session/withAuthentication";
import {Swipe} from "../Swipe";

const MatchPage = () => (
    <Grid centered columns={2}>
        <Grid.Column textAlign="center">
            <Header as="h3">
                Find match
            </Header>
            <Match textAlign="center"/>
        </Grid.Column>
    </Grid>
);


class MatchBase extends Component {
    constructor(props) {
        super(props);

        this.state = {error: null, hasFetched: false, swipes: []};
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !this.state.hasFetched;

    }

    componentDidMount() {
        axios.get('https://gitlove.herokuapp.com/getMatches/QABItfq1u84qrOi1HbQx').then((res) => {
            this.setState({
                swipes: res.data
            })
        })
    }

    render() {
        const auth = {uid: '123'};
        if (this.state.swipes.length) {
            this.setState({hasFetched: true});

            return (
                <div className='swipeCon'>
                    {
                        this.state.swipes.map(swipe => {
                            return (<Swipe username={swipe.username} userId={swipe.usedId} pic={swipe.profilePic} score={swipe.rank}
                                           auth={auth}></Swipe>)
                        })
                    }
                </div>
            );
        } else {
            return (<div></div>)
        }
    }
}

const Match = compose(
    withRouter, withFirebase, withAuthentication
)(MatchBase);

export default MatchPage;

export {Match};
