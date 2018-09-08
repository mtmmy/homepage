import React from 'react';
import InfoDiv from '../components/InfoDiv';
import { Element } from 'react-scroll';

class ExpSubpage extends React.Component {
    
    createInfoDivs() {
        let { data, type, divClassName, bgClassName } = this.props;
        let divs = [];
        data.forEach(function (val, i) {
            var element;
            if (type == "working") {
                element = (
                    <div key={i}>
                        <div className={`expDivBg ${val.bgClassName}`}></div>
                        <Element name={type + i} className={`workingDiv`}>
                            <InfoDiv attributes={val} className={divClassName} type="workingExp" />
                        </Element>
                    </div>
                );
            } else if (type == "education") {
                element = (
                    <div key={i}>
                        <div className={`expDivBg ${val.bgClassName}`}></div>
                        <Element name={type + i} className={`educationDiv`}>
                            <InfoDiv attributes={val} className={divClassName} type="educationExp" />
                        </Element>
                    </div>
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
                {this.createInfoDivs()}
            </div>
        )
    }
}

export default ExpSubpage;