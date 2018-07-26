import React from 'react';
import { Route, Switch, Link } from 'react-router';
import './App.scss'
import NavbarComponent from './NavbarComponent.jsx';
import HomePage from './../pages/HomePage.jsx';
import SkillPage from './../pages/SkillPage.jsx';
import WorkingPage from './../pages/WorkingPage.jsx';
import EducationPage from './../pages/EducationPage.jsx';

export default class App extends React.Component {

  createItems(items) {
    let container = [];
    for (let i = 0; i < items.length - 1; i ++) {
      let item = items[i];
      if (i === 0) {
        container.push(<Route key={i} path={item.url} exact component={item.component} />);
      } else {
        container.push(<Route key={i} path={item.url} component={item.component} />);
      }
    }
    return container;
  }

  render() {
    const conPref = "";
    var props = {
      items: [
        {
          url: "/",
          text: "HANMIN YANG",
          component: HomePage
        },
        {
          url: "/working",
          text: "Working Exp",
          component: WorkingPage
        },
        {
          url: "/edu",
          text: "Education",
          component: EducationPage
        },
        {
          url: "/skills",
          text: "Skills",
          component: SkillPage
        },
        {
          text: "Contact",
          subItems: [
            {
              text: "LinkedIn",
              className: "fa fa-linkedin-square"
            },
            {
              text: "Github",
              className: "fa fa-github-square"
            },
            {
              text: "Email",
              className: "fa fa-envelope-square"
            }
          ]
        }
      ]
    }
    return (
      <div style={{textAlign: 'center'}}>
          <NavbarComponent
            {...props}
          />

          <div className="contentPanel">
            <Switch>
              {this.createItems(props.items)}
            </Switch>
          </div>
      </div>
    );
  }
}