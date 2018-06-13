import React from 'react';
import './SkillCircle.scss';

export default class SkillCircle extends React.Component {

    renderPicOrText(picClassName, text) {
        if (typeof(picClassName) !== "undefined" && picClassName !== null) {
            return <div className={`skillPic ${picClassName}`} />
        } else if (text != "") {
            return <div className="skillName">{text}</div>
        }        
    }

    render() {
        let { percentage, colorCode, picClassName, text, isActive } = this.props;
        return (
            <figure className="skillCircle"  data-percent={percentage}>
                {this.renderPicOrText(picClassName, text)}
                <svg  viewBox="0 0 200 200">
                    <circle className="under" cx={92} cy={102} r={80} />
                    <circle 
                        className={`outer ${isActive ? "circle" + percentage : ""}`}
                        cx={92} 
                        cy={102} 
                        r={80}
                        stroke={colorCode}
                    />                    
                </svg>
            </figure>
        )
    }
}