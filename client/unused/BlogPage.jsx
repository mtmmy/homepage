import React from 'react';
import './BlogPage.scss';
import ArticleThumbnails from './../components/ArticleThumbnails.jsx';
import BlogMenu from './../components/BlogMenu.jsx';
import SOURCE_CODE from '../sourcecode/sourcecode';
import { format as dateFormat} from 'date-fns';

// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/styles/hljs';
// import AddBinary from './../sourcecode/addBinary.txt';

const ALL_TAGS = new Set();
const ALL_CATEGORIES = new Set();
const ALL_DATES = new Set();

class BlogPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTags: new Set(),
            articles: [],
            selectedCategory: "all",
            selectedDate: "all",
        }

        this.onCateSelect = this.onCateSelect.bind(this);
        this.onDateSelect = this.onDateSelect.bind(this);
        this.onTagsSelect = this.onTagsSelect.bind(this);
        this.onTagsUnselect = this.onTagsUnselect.bind(this);
    }

    onCateSelect(e) {
        this.setState({ selectedCategory: e.target.value });
    }

    onDateSelect(e) {
        this.setState({ selectedDate: e.target.value });
    }

    onTagsSelect(tagName) {
        let selectedTags = this.state.selectedTags;
        selectedTags.add(tagName);
        this.setState({
            selectedTags: selectedTags
        });
    }

    onTagsUnselect(tagName) {
        let selectedTags = this.state.selectedTags;
        selectedTags.delete(tagName);
        this.setState({
            selectedTags: selectedTags
        });
    }

    componentWillMount() {
    }

    componentDidMount() {
        
    }

    createArticles() {
        let articles = [];

        SOURCE_CODE.forEach((item, index) => {

            let tags = item.tags;
            let date = item.date;
            let category = item.category;            
            
            tags.forEach((item) => {
                ALL_TAGS.add(item);
            });

            ALL_CATEGORIES.add(category);

            ALL_DATES.add(dateFormat(date, 'MM/YYYY'));

            articles.push(
                <ArticleThumbnails key={index}
                    code={item.code}
                    title={item.title}
                    description={item.description}
                    explaination={item.explaination}
                    tags={tags}
                    selectedTags={this.state.selectedTags}
                    date={date}
                    selectedDate={this.state.selectedDate}
                    category={category}
                    selectedCategory={this.state.selectedCategory}                    
                />
            )
        });
        return articles;
    }

    render() {
        let thumbnails = this.createArticles();
        return (
            <div className="blogPage">                
                <BlogMenu
                    tags={ALL_TAGS}
                    selectedTags={this.state.selectedTags}
                    onTagsSelect={this.onTagsSelect}
                    onTagsUnselect={this.onTagsUnselect}
                    categories={ALL_CATEGORIES}
                    onCateSelect={this.onCateSelect}
                    dates={ALL_DATES}
                    onDateSelect={this.onDateSelect}
                />
                <div className="articleCol">
                    {/* {this.loopArticles(articleContent)} */}
                    {thumbnails}
                </div>                
            </div>
        );
    }
}

export default BlogPage;