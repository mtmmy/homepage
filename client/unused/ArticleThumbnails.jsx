import React from 'react';
import Modal from 'react-modal';
import { Button, } from 'react-bootstrap';
import ArticleComponent from './ArticleComponent.jsx';
import { format as dateFormat, parse as parseDate} from 'date-fns';
// import parseDate from 'date-fns/parse';
import './articleThumbnails.scss';

export default class ArticleThumbnails extends React.Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            customStyles: {
                content : {
                    height: '1000px',
                    width: '100%',
                    padding: '30px',
                    overflowY: 'auto',
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)'
                }
            },
            showClass: ""
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    isTagsSelected(selectedTags) {
        let { tags } = this.props;

        for (let i = 0; i < tags.length; i++) {
            if(selectedTags.has(tags[i])) {
                return true;
            }
        }
        
        return false;
    }

    createTags() {
        let tags = [];

        this.props.tags.forEach((item, index) => {
            tags.push(
                <div key={index}>{item}</div>
            )
        });

        return tags;
    }

    componentWillReceiveProps(nextProps) {

        let selectedDate = nextProps.selectedDate;

        let newSelectedTags = nextProps.selectedTags;
        let doesCateMatch = nextProps.selectedCategory === "all" ? true : (nextProps.selectedCategory === nextProps.category);
        let doesDateMatch = true;

        if (selectedDate !== "all") {
            let date = this.props.date;
            let selectedMonth = selectedDate.split('/')[0];
            let selectedYear = selectedDate.split('/')[1];

            doesDateMatch = date.getMonth() == parseInt(selectedMonth) - 1 
                && date.getYear() == parseInt(selectedYear) - 1900;
        }

        let doesTagsMatch = newSelectedTags.size == 0 || this.isTagsSelected(newSelectedTags);

        if (doesCateMatch && doesDateMatch && doesTagsMatch) {
            this.setState({ showClass: "" });
        } else {
            this.setState({ showClass: "thumbnailHide" });
        }
    }

    render() {

        let { code, title, description, explaination, tags, date, selectedTags, category } = this.props;
        
        
        return (
            <div className={`thumbnail ${this.state.showClass}`}>
                <h2 className="title">{title}</h2>
                <div className="articleData">{dateFormat(date, 'MM/DD/YYYY')}</div>
                <div className="description">{description}</div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    closeTimeoutMS={500}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                    className="articleModal"
                >
                    <ArticleComponent
                        code={code}
                        title={title}
                        description={description}
                        explaination={explaination}
                        tags={tags}
                        date={date}                        
                        closeModal={this.closeModal}
                    />
                </Modal>
                <div className="bottomDiv">
                    <div className="tagsDiv">{this.createTags()}</div>
                    <Button className="readBtn" onClick={this.openModal}>Read More</Button>
                </div>
                
            </div>
        )
    }
}