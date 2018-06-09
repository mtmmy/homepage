import React from 'react';

class HomePage extends React.Component {
    render() {
        var tempStyle = {
            textAlign: "initial"
        }
        return (
            <div style={tempStyle}>
                <ul>
                    <li>
                        Doing List
                        <ul>
                            <li>Experience Page</li>
                            <li>Navbar</li>
                        </ul>
                    </li>
                    <li>
                        Todo List
                        <ul>
                            <li>Design of home page (totally no idea)</li>
                            <li>Bio page (no idea)</li>
                            <li>Skills page (skill tree animation maybe)</li>
                        </ul>
                    </li>
                    <li>
                        Minor Issues
                        <ul>
                            <li>The bottom navigation can not be activated</li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default HomePage;