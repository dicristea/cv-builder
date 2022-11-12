import React, { useState } from 'react'; 
import PropTypes from 'prop-types';

const ToggleButton = (props) => {
    const [toggle, setToggle] = useState(false);
    const { onChange } = props;

    const triggerToggle = () => {
        setToggle( !toggle );

        if ( typeof onChange === 'function' ) {
            onChange(!toggle);
        };
    }

    return ( 
        <div onClick={triggerToggle} className={`toggle ${toggle ? 'toggle--checked': ''}`}>
            <div className="toggle-container">
                <div className="toggle-check">
                    <span>✓</span>
                </div>
                <div className="toggle-uncheck">
                    <span>✕</span>
                </div>
            </div>
            <div className="toggle-circle"></div>
            {/* <input className="toggle-input" type="checkbox" aria-label="Toggle Button" /> */}
        </div>
    ); 
  
}

ToggleButton.propTypes = {
    onChange: PropTypes.func
}

export default ToggleButton;