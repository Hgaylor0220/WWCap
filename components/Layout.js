// import React, { Fragment } from 'react';
import Nav from './nav';
const bodyStyle = {
    bodyheight: "100%",
    background: "#d1d4c9",


};

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: "10px solid white",
    background:"#ADD8E6"
   



};

const Layout = props => (
    <body style={bodyStyle}>
        <div style={layoutStyle}>
            <Nav />
            {props.content}
        </div>
    </body>
);

export default Layout;