import React from 'react';
import InfoDiv from './../components/InfoDiv.jsx';
import NavDots from './../components/NavDots.jsx';
import { Element } from 'react-scroll';

class ExpSubpage extends React.Component {
    
    createInfoDivs() {
        let { data, type, divClassName, bgClassName } = this.props;
        let divs = [];
        data.forEach(function (val, i) {
            var element;
            if (type == "working") {
                element = (
                    <Element key={i} name={type + i} className={`workingDiv ${bgClassName}`}>
                        <InfoDiv attributes={val} className={divClassName} type="workingExp" />
                    </Element>
                );
            } else if (type == "education") {
                element = (
                    <Element key={i} name={type + i} className={`educationDiv ${bgClassName}`}>
                        <InfoDiv attributes={val} className={divClassName} type="educationExp" />
                    </Element>
                );
            }
            divs.push(element);
        });

        return divs;
    }

    render() {
        const { data, type, navDotClassName } = this.props;
        return (
            <div>
                {/* <NavDots
                    amount={data.length}
                    to={type}
                    offset={-94}
                    duration={500}
                    className={navDotClassName}
                />                     */}
                {this.createInfoDivs()}
            </div>
        )
    }
}

export default ExpSubpage;