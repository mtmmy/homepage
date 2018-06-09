import React from 'react';
import { Route, Switch, Link } from 'react-router';
import './App.scss'
import NavbarComponent from './NavbarComponent.jsx';
import HomePage from './../pages/HomePage.jsx';
import BioPage from './../pages/BioPage.jsx';
import ExpPage from './../pages/ExpPage.jsx';
import SkillPage from './../pages/SkillPage.jsx';

export default class App extends React.Component {
  render() {
    const conPref = "";
    var props = {
      brand: {
        url: conPref + "/",
        text: "HANMIN YANG"
      },
      item1: {
        text: "Contact"
      },
      item2: {
        url: conPref + "/bio",
        text: "Bio"
      },
      item3: {
        url: conPref + "/experiences",
        text: "Experience"
      },
      item4: {
        url: conPref + "/skills",
        text: "Skills"
      }
    }
    return (
      <div style={{textAlign: 'center'}}>
          <NavbarComponent
            {...props}
          />

          <div className="contentPanel">
            <Switch>
              <Route path={props.brand.url} exact component={HomePage} />
              <Route path={props.item2.url} component={BioPage} />
              <Route path={props.item3.url} component={ExpPage} />
              <Route path={props.item4.url} component={SkillPage} />
            </Switch>
          </div>
      </div>
    );
  }
}