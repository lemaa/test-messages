import styled from 'styled-components';
import { Row, Container  } from 'react-bootstrap';

const MessageContainer = styled(Container)`
    background-color: #ffffff;
    font-size: 12px;
    color: #343a40;
    border: 1px solid #E7E7E7;
    text-align: justify;
    padding: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    & .read-more-button{
        display: inline-block;
        margin-left: 3px;
        color: #6c757d;
        cursor: pointer;
        &::before {
            content: '... ';
            color: #1d2124;
        }
    }
`;

const TextRow = styled(Row)`
`;
const DateRow = styled(Row)`
    text-align: end;
    text-transform: capitalize;
    color: #6c757d;
`;

export { MessageContainer, TextRow, DateRow };
