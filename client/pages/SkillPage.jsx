import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ScrollTrigger from 'react-scroll-trigger';
import CircleWithName from '../components/CircleWithName.jsx';
import SkillCircle from './../components/SkillCircle.jsx';
import './SkillPage.scss'
// import './example.scss'
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
                <Row key={i} className="areaRow">
                    <Col xs={4} sm={3} md={2} lg={2}>
                        {dataSource.nameTxt}
                    </Col>
                    <Col xs={8} sm={9} md={10} lg={10}>
                        <ScrollTrigger 
                            onEnter={ (e) => { this.onEnterViewport(e, key) }} 
                        >
                            <Row>{this.createSkills(dataSource.skills)}</Row>
                        </ScrollTrigger>
                    </Col>
                </Row>
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
                <Col key={i} xs={6} sm={4} md={3} lg={2}>
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
            <Grid>
                {this.createAreaRows()}
            </Grid>
        );
    }
}

export default SkillPage;