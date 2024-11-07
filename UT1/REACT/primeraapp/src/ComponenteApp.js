import React from "react";
import PropTypes from 'prop-types';
const ComponenteApp = (props) => {

    return (
        <>
    
            <p>La suma de num1 y num2 es: {props.num1 + props.num2}</p>
        </>
    );
};

ComponenteApp.propTypes = {
    num1: PropTypes.number.isRequired,
    num2: PropTypes.number.isRequired
};

export default ComponenteApp;