import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Label} from 'semantic-ui-react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Home} from './pages/Home'
import {Topics} from "./pages/Topics";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Label as='a'>
                                <Link to="/">Home</Link>
                            </Label>
                        </li>
                        <li>
                            <Label as='a'>
                                <Link to="/topics">Topics</Link>
                            </Label>
                        </li>
                    </ul>

                    <hr/>

                    <Route exact path="/" component={Home}/>
                    <Route path="/topics" component={Topics}/>
                </div>
            </Router>
        );
    }
}

export default App;
