import React from 'react';
import { Nav, Navbar, NavItem,
    NavDropdown, MenuItem } from 'react-bootstrap';

class NavbarComponent extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href={this.props.brand.url}>{this.props.brand.text}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavItem eventKey={2} href="#">
                        {this.props.item2.text}
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        {this.props.item3.text}
                    </NavItem>
                    <NavItem eventKey={4} href="#">
                    {this.props.item4.text}
                    </NavItem>
                    </Nav>
                    <Nav pullRight>
                    <NavDropdown eventKey={1} title={this.props.item1.text} id="basic-nav-dropdown">
                        <MenuItem eventKey={1.1}>LinkedIn</MenuItem>
                        <MenuItem eventKey={1.2}>Email</MenuItem>                        
                        <MenuItem divider />
                        <MenuItem eventKey={1.3}>Github</MenuItem>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarComponent;