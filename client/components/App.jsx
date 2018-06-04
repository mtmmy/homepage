import React from 'react';
import NavbarComponent from './NavbarComponent.jsx';

export default class App extends React.Component {
  render() {
    var props = {
      brand: {
        url: "localhost:8080",
        text: "HANMIN YANG"
      },
      item1: {
        text: "Contact"
      },
      item2: {
        text: "Bio"
      },
      item3: {
        text: "Experience"
      },
      item4: {
        text: "Skills"
      }
    }
    return (
     <div style={{textAlign: 'center'}}>
        <NavbarComponent
          {...props}
        />
      </div>);
  }
}