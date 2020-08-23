 
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
   
const Errors = styled.p`
    color:red;
    &::before{
        display: inline;
        content: "⚠ ";
    }
`;
const FormContainer = styled(Container)`
    margin-top: 25px;
`;

export { Errors, FormContainer};
