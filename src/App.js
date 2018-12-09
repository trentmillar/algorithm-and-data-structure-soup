import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import 'typeface-roboto';
import './App.css';
import {MuiThemeProvider} from "@material-ui/core/styles";
import DefaultLayout from './ui/components/DefaultLayout';
import RunContainer from './ui/containers/RunContainer';

class App extends Component {
  render() {
    return (
        <div>
          <HashRouter>
            <Switch>
                <Route exact path="/" component={RunContainer} />
            </Switch>
          </HashRouter>
        </div>
    );
  }
}

export default App;
