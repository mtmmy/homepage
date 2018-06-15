import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Waypoint from 'react-waypoint';
import SkillCircle from './../components/SkillCircle.jsx';
import './SkillPage.scss'
import data from './../data/skill.json';

class SkillPage extends React.Component {

    constructor(props) {
        super(props);
        this.onEnterViewport = this.onEnterViewport.bind(this);

        this.state = {
            skillData: data
        }
    }

    componentWillMount() {
        
    }

    onEnterViewport(e, rowName) {
        let newSkillData = this.state.skillData;
        newSkillData[rowName] = data[rowName];
        newSkillData[rowName].skills.forEach(function(val, i) {
            val.isActive = true;
        });
        this.setState({ skillData: newSkillData });
    }

    createAreaRows() {
        let container = [];
        let skillData = this.state.skillData;

        let i = 0;
        for (let key in skillData) {
            let dataSource = skillData[key];
            let row = (
                <div key={i} className="areaRowOuter">
                    <Waypoint onEnter={ (e) => { this.onEnterViewport(e, key) }} bottomOffset="300px">
                        <div className="areaRowInner">
                            <Row>
                                <Col xs={12} className="cateName">{dataSource.nameTxt}</Col>
                            </Row>
                            <Row className="skillRow">
                                {this.createSkills(dataSource.skills)}
                            </Row>
                        </div>
                    </Waypoint>
                </div>
            );
            container.push(row);
            i++;
        }

        return container;
    }

    createSkills(skills) {
        let container = [];
        skills.forEach(function(val, i) {
            container.push(
                <Col key={i} xs={4} sm={3} md={3} lg={2}>
                    <SkillCircle 
                        percentage={val.percentage} 
                        colorCode={val.colorCode}
                        isActive={val.isActive}
                        picClassName={val.picClassName}
                        text={val.name}
                    />
                </Col>)
        })
        return container;
    }

    render() {
        return (
            // <div>
                <Grid className="skillContainer">
                    {this.createAreaRows()}
                </Grid>
            // </div>
        );
    }
}

export default SkillPage;