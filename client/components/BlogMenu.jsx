import React from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton,
    MenuItem, DropdownButton, FormControl } from 'react-bootstrap';
import './BlogMenu.scss';

export default class BlogMenu extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            isMenuShow: false,
            isMenuItemShow: false
        }

        this.onMenuClick = this.onMenuClick.bind(this);
        this.onTagsClick = this.onTagsClick.bind(this);
    }

    checkViewportDimension() {
        if (window.innerWidth >= 1200) {
            this.setState({ 
                isMenuShow: true,
                isMenuItemShow: true
            });
        } else {
            this.setState({ 
                isMenuShow: false,
                isMenuItemShow: false
            });
        }
    }

    onMenuClick() {
        this.setState({ isMenuShow: !this.state.isMenuShow });

        let oldMenuItemShow = this.state.isMenuItemShow;

        if (oldMenuItemShow) {
            this.setState({ isMenuItemShow: !oldMenuItemShow });
        } else {
            setTimeout(() => {
                this.setState({ isMenuItemShow: !oldMenuItemShow });
            }, 1000);
        }        
    }

    createCategories() {
        let categories = [];

        this.props.categories.forEach((item, index) => {
            categories.push(
                <option key={index} value={item}>{item}</option>
            )
        });

        return (
            <FormControl componentClass="select" placeholder="select" onChange={this.props.onCateSelect}>
                <option value="all">Show All</option>
                {categories}
            </FormControl>
            // <ButtonToolbar>
            //     <DropdownButton
            //         title="Select a Category"
            //         id="dropdown-size-large"
            //         onSelect={this.props.onCateSelect}
            //     >
            //         <MenuItem key={0} eventKey="all">Show All</MenuItem>
            //         {categories}
            //     </DropdownButton>
            // </ButtonToolbar>
        )
    }

    careteDates() {
        let dates = [];

        this.props.dates.forEach((item, index) => {
            dates.push(
                <option key={index} value={item}>{item}</option>
            )
        });

        return (
            <FormControl componentClass="select" placeholder="select" onChange={this.props.onDateSelect}>
                <option value="all">Show All</option>
                {dates}
            </FormControl>
        )
    }

    onTagsClick(e, name) {
        if (e.target.checked) {
            this.props.onTagsSelect(name);
        } else {
            this.props.onTagsUnselect(name);
        }
    }

    createTags() {
        let tags = [];

        this.props.tags.forEach((item, i) => {
            tags.push(
                <ToggleButton
                    key={i}
                    value={i}
                    onChange={(e) => {
                        this.onTagsClick(e, item)
                    }}
                    className="btnGroup"
                >
                    {item}
                </ToggleButton>
            )
        });
        
        return (
            <ButtonToolbar>
                <ToggleButtonGroup type="checkbox">
                    {tags}
                </ToggleButtonGroup>
            </ButtonToolbar>
        );
    }

    componentWillReceiveProps() {

    }

    componentWillMount() {
        this.checkViewportDimension();
        window.addEventListener("resize", this.checkViewportDimension.bind(this));
    }

    componentDidMount() {
        window.removeEventListener("resize", this.checkViewportDimension.bind(this));
    }

    render() {
        let { isMenuShow, isMenuItemShow } = this.state;
        let { tags } = this.props;

        return (
            <div className={isMenuShow ? "menuColShow" : "menuColHide"}>
                <div className={isMenuItemShow ? "menuItemsShow" : "menuItemsHide"}>
                    {/* <div className="searchBar">
                        <div className="menuHaeder">searchbar</div>
                        <div className="menuContent"></div>
                    </div> */}
                    <div className="categories">
                        <div className="menuHaeder">Categories</div>
                        <div className="menuContent">{this.createCategories()}</div>
                    </div>
                    <div className="archive">
                        <div className="menuHaeder">Archive</div>
                        <div className="menuContent">{this.careteDates()}</div>
                    </div>
                    <div className="tags">
                        <div className="menuHaeder">Tags</div>
                        <div className="menuContent">{this.createTags()}</div>
                    </div>
                </div>
                <div className="clickkBar" onClick={this.onMenuClick}>{isMenuShow ? "Hide" : "Show"}</div>
            </div>
        )
    }
}