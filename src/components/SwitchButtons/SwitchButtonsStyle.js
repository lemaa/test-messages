 
import styled from 'styled-components'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
 
const ToggleContainer = styled(ToggleButtonGroup)`
    align-items: center;
    margin: 0 5px;
    overflow: hidden;
    position: relative;
    background-color: #222;
    border-radius: 25px;
    border: 2px solid #222;
`;

const ToggleChild = styled(ToggleButton)`
    padding: .1rem .5rem;
    font-size: 11px;
    &.active{
        background-color: #009a00 !important;
        border-color: #009a00 !important;
    }
`;
export { ToggleContainer, ToggleChild};
