import React, { Component } from "react";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Container from './Container.jsx';
import Start from './Start.jsx';
import Intro from './Intro.jsx';
import Credits from './Credits.jsx';
import Scenario1 from './Scenario1.jsx';
import Scenario2 from './Scenario2.jsx';
import Scenario3 from './Scenario3.jsx';
import Scenario4 from './Scenario4.jsx';

export default class Game extends Component {
  render() {
    return(
      <div id ="zelda-game">
        <Router history ={hashHistory}>
          <Route path ="/" component={Container}>
            <IndexRoute component={Start}  />
            <Route path="/intro" component={Intro} />
            <Route path="/credits" component={Credits} />
            <Route path="/scenario-1" component={Scenario1} />
            <Route path="/scenario-2" component={Scenario2} />
            <Route path="/scenario-3" component={Scenario3} />
            <Route path="/scenario-4" component={Scenario4} />
          </Route>
        </Router>
      </div>

    )
  }
}
