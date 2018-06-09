import React from 'react';

class InfoDiv extends React.Component {

    createDetails(details) {
        var list = [];
        details.forEach(function(val, i) {
            list.push(<div key={i}>{val}</div>)
        })
        return list;
    }

    render() {
        var { attributes, className, type } = this.props;

        if (type == "workingExp") {
            let { companyName, dateStart, dateEnd, location, title, details } = attributes;
            return (
                <div className={className}>
                    <div className="companyName">{companyName}</div>
                    <div className="title">{title}</div>
                    <div className="date">{dateStart} - {dateEnd}</div>
                    <div className="location">{location}</div>                    
                    <div className="detail">
                        {this.createDetails(details)}
                    </div>
                </div>
            )
        } else if (type == "educationExp") {
            let { school, dateEnd, location, major, details } = attributes;
            return (
                <div className={className}>
                    <div className="school">{school}</div>
                    <div className="major">{major}</div>
                    <div className="date">{dateEnd}</div>
                    <div className="location">{location}</div>                    
                    <div className="detail">
                        {this.createDetails(details)}
                    </div>
                </div>
            )
        }
        return (
            <div className={className}>                
            </div>
        )
    }
}

export default InfoDiv;