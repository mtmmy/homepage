import React from 'react';
import ExpSubpage from './ExpSubpage.jsx';
import workingData from './../data/working.json';
import './ExpPage.scss';

export default class WorkingPage extends React.Component {

    render() {
        return (
            <ExpSubpage
                data={workingData}
                type="working"
                navDotClassName="workingNavDot"
                divClassName="expInfoDiv"
            />
        )
    }
}