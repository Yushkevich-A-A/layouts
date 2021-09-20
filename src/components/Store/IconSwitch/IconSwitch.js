import React from 'react';
import PropTypes from 'prop-types';

import './IconSwitch.css';

function IconSwitch(props) {
    const { icon, onSwitch } = props;

    return (
        <div className='block-switch'>
            <span className="material-icons" onClick={onSwitch}>{icon}</span>
        </div>
    )
}

IconSwitch.propTypes = {
    icon:  PropTypes.string.isRequired,
    onSwitch:  PropTypes.func.isRequired,
};

export default IconSwitch;

