import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import InfoDiv from './../components/InfoDiv.jsx';
import NavDots from './../components/NavDots.jsx';
import ExpSubpage from './ExpSubpage.jsx';
import './ExpPage.scss';
import workingData from './../data/working.json';
import educationData from './../data/education.json';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class ExpPage extends React.Component {

    createInfoDivs() {
        let divs = [];
        workingData.forEach(function (val, i) {
            divs.push(
                <Element key={i} name={"workingDiv" + i} className="element">
                    <InfoDiv companyName={val.companyName} className="expInfoDiv" />
                </Element>
            );
        });

        return divs;
    }

    render() {
        return (
            <div>            
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">                
                <Tab eventKey={1} title="Working">
                    <ExpSubpage
                        data={workingData}
                        type="working"
                        navDotClassName="workingNavDot"
                        divClassName="expInfoDiv"
                    />
                </Tab>
                <Tab eventKey={2} title="Education">
                    <ExpSubpage
                        data={educationData}
                        type="education"
                        navDotClassName="educationNavDot"
                        divClassName="eduInfoDiv"
                    />
                </Tab>
                <Tab eventKey={3} title="Projects">
                    Tab 3 content
                </Tab>
            </Tabs>
            </div>
        );
    }
}

export default ExpPage;