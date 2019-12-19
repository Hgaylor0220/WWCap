import React from 'react';
import PropTypes from 'prop-types';


function River(props) {
    var riverStyle = {
        padding: '10',
        borderColor: '#27253d',
    };
    var quackerImgStyle = {
        width: '100%',
        height: 'auto',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '5px'
    }
    return (
        <div
            style={riverStyle}
            className="card" >
            <h3>{props.Name}</h3>
            {/* <img style={quackerImgStyle} src={quacker1} /> */}
            <br />
            <li>
                <p>{props.Description}</p>
                <ul>{props.class}</ul>
                <ul>{props.quackerBio}</ul>
                    <ul>{props.PutIn}</ul>
                    <ul>{props.TakeOut}</ul>
                    <ul>{props.Location}</ul>
            </li>
        </div>
    );
}

River.propTypes = {
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Class: PropTypes.string.isRequired,
    PutIn: PropTypes.string,
    TakeOut: PropTypes.string,
    Location: PropTypes.string,
    StationNumber: PropTypes.int,
    img: PropTypes.string
}

export default River;