import React from 'react';
import { Nav, Navbar, NavItem,
    NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './NavbarComponent.scss';

class NavbarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.onContactSelect = this.onContactSelect.bind(this);
    }

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
            let evnetKeyIndex = contactIndex + "." + (i + 1);
            container.push(
                <MenuItem 
                    key={i} 
                    eventKey={evnetKeyIndex} 
                    href={val.text === "Email" ? "mailto:hyang173@asu.edu" : "#"}
                    className="contactOption"
                >
                    <i className={val.className}/>
                    <p>{val.text}</p>
                </MenuItem>
            )
        });

        return (
            <NavDropdown eventKey={contactIndex} title={contact.text} id="basic-nav-dropdown">
                {container}
            </NavDropdown>
        )
    }

    onContactSelect(e) {
        switch (e) {
            case "3.1":
                window.open("https://www.linkedin.com/in/yanghanmin/", "_blank");
                break;
            case "facebook":
                window.open("https://www.facebook.com/mtmmy", "_blank");
                break;
            case "3.2":
                window.open("https://github.com/mtmmy", "_blank");
                break;
            case "twitter":
                window.open("https://twitter.com/han_min_yang", "_blank");
                break;
            default:
        }
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
                    <Nav pullRight onSelect={this.onContactSelect}>
                        {this.createContact(items[items.length - 1], items.length - 1)}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarComponent;