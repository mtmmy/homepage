import React from 'react';
import Footer from './../components/Footer.jsx';
import './HomePage.scss'

class HomePage extends React.Component {
    render() {
        var tempStyle = {
            textAlign: "initial",
            height: "1000px"
        }
        return (
            <div>
                <div className="banner">
                    <div>
                        <div className="helloSection">
                            <h4>Hello, I'm</h4>
                        </div>
                        <h1 className="nameSection">
                            <p>HANMIN YANG</p>
                        </h1>
                    </div>
                </div>
                <div className="bio">
                </div>
                <div style={tempStyle}>
                    <ul>
                        <li>
                            Doing List
                            <ul>
                                <li>Experience Page</li>
                                <li>Skill Page</li>
                                <li>Navbar</li>
                            </ul>
                        </li>
                        <li>
                            Todo List
                            <ul>
                                <li>Design of home page (totally no idea)</li>
                                <li>Put bio data in homepage/</li>
                            </ul>
                        </li>
                        <li>
                            Minor Issues
                            <ul>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Footer />
            </div>
        );
    }
}

export default HomePage;