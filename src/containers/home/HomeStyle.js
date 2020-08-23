import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const MainContainer = styled(Container)`
    min-height: 95vh;
    margin-bottom: 13px;
    position: relative;
`;
 
const NoMessages = styled.div`
    display: flex;
    height: 95vh;
    justify-content: center;
    align-items: center;
`;
const MessageSection = styled(Row)`

`;
const FormSection = styled(Row)`
    position: absolute;
    bottom: 0;
    width: 100%;
`;
export { 
    MainContainer, 
    NoMessages,
    MessageSection,
    FormSection 
 };
