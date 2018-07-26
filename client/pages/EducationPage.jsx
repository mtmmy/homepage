import React from 'react';
import ExpSubpage from './ExpSubpage.jsx';
import educationData from './../data/education.json';

export default class EducationPage extends React.Component {

    render() {
        return (
            <ExpSubpage
                data={educationData}
                type="education"
                navDotClassName="educationNavDot"
                divClassName="eduInfoDiv"
            />
        )
    }
}