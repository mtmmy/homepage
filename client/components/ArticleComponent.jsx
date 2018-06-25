import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import dateFormat from 'date-fns/format';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import './ArticleComponent.scss';

export default class ArticleComponent extends React.Component {
    
    render() {
        let { code, title, description, explaination, tags, date, closeModal } = this.props;
        return (
            <div>
                <h2>{title}</h2>
                <div>{description}</div>
                <div>{explaination}</div>
                <SyntaxHighlighter
                    language="javascript"
                    showLineNumbers={true}
                    style={docco}
                    className="code"
                    wrapLines={true}
                >
                    {code}
                </SyntaxHighlighter>
                <div>{tags}</div>
                <div>{dateFormat(date, 'MM-DD-YYYY')}</div>
                <div onClick={closeModal} className="closeBtn"></div>
            </div>
        )
    }
}