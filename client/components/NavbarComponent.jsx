import React from 'react';
import { Nav, Navbar, NavItem,
    NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './NavbarComponent.scss';

class NavbarComponent extends React.Component {    

    render() {

        const {
            brand,
            item1,
            item2,
            item3,
            item4
        } = this.props;

        return (
            <Navbar collapseOnSelect className="navbar">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={brand.url}>{brand.text}</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to={item2.url}>
                            <NavItem eventKey={2}>
                                {item2.text}                        
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={item3.url}>
                            <NavItem eventKey={3}>
                                {this.props.item3.text}
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={item4.url}>
                            <NavItem eventKey={4}>
                                {this.props.item4.text}
                            </NavItem>
                        </LinkContainer>
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