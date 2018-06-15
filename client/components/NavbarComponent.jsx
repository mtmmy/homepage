import React from 'react';
import { Nav, Navbar, NavItem,
    NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './NavbarComponent.scss';

class NavbarComponent extends React.Component {    

    createItems(items) {
        let container = [];

        for (let i = 1; i < items.length - 1; i++) {
            let item = items[i];
            container.push(
                <LinkContainer key={i} to={item.url}>
                    <NavItem eventKey={i}>
                        {item.text}
                    </NavItem>
                </LinkContainer>
            );
        }

        return container;
    }

    createContact(contact, contactIndex) {
        let container = [];

        contact.subItems.forEach(function(val, i) {
            let evnetKeyIndex = contactIndex + (i + 1);
            container.push(
                <MenuItem key={i} eventKey={evnetKeyIndex}>{val.text}</MenuItem>
            )
        });

        return (
            <NavDropdown eventKey={contactIndex} title={contact.text} id="basic-nav-dropdown">
                {container}
            </NavDropdown>
        )
    }

    render() {

        const {
            items
        } = this.props;
        return (
            <Navbar collapseOnSelect className="navbar">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={items[0].url}>{items[0].text}</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        {this.createItems(items)}
                    </Nav>
                    <Nav pullRight>
                        {this.createContact(items[items.length - 1], items.length - 1)}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarComponent;