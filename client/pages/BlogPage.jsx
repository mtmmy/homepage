import React from 'react';
import './BlogPage.scss';

class BioPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isMenuShow: false,
            isMenuItemShow: false
        }

        this.onMenuClick = this.onMenuClick.bind(this);
    }

    checkViewportDimension() {
        if (window.innerWidth >= 1280) {
            this.setState({ 
                isMenuShow: true,
                isMenuItemShow: true
             });
        }
    }

    onMenuClick() {
        this.setState({ isMenuShow: !this.state.isMenuShow });
        setTimeout(() => {
            console.log("running");
            this.setState({ isMenuItemShow: !this.state.isMenuItemShow });
        }, 1000);
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
        let menuItems = (
            <div className={isMenuItemShow ? "menuItemsShow" : "menuItemsHide"}>
                <div className="searchBar">searchbar</div>
                <div className="categories">categories</div>
                <div className="archive">archive</div>
                <div className="tags">tags</div>
            </div>
        );

        return (
            <div className="blogPage">
                <div className={isMenuShow ? "menuColShow" : "menuColHide"}>
                    { isMenuShow ? menuItems : "" }
                    {/* { menuItems } */}
                    <div className="clickkBar" onClick={this.onMenuClick}>Click</div>
                </div>
                <div className="articleCol">
                    articles
                </div>
                
            </div>
        );
    }
}

export default BioPage;