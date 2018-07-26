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
                <Footer />
            </div>
        );
    }
}

export default HomePage;