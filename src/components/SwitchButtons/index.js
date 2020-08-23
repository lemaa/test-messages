import React, { useState } from "react";
import PropTypes from 'prop-types';
import {ToggleContainer, ToggleChild} from './SwitchButtonsStyle';

function SwitchButtons(props ) {
  const [buttonType] = useState(props.buttonType);
  const [nameIdentifier] = useState(props.nameIdentifier);
  const [options] = useState(props.options);

    return (
        <ToggleContainer type={buttonType} name={nameIdentifier}  value={props.value} onChange={props.onChange}>
         {options && options.map((option, index) => {
            return (
                <ToggleChild variant={"dark"} key={index.toString()} value={option.value}>{option.text}  </ToggleChild>
            );
             })}

        </ToggleContainer>
    );
}

SwitchButtons.propTypes = {
    buttonType: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
    nameIdentifier: PropTypes.string.isRequired,
    defaultValue: PropTypes.any,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.any,
            text: PropTypes.string
          })
    ).isRequired
  };

export default SwitchButtons;