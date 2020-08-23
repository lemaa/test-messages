import React , {useState} from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import Button from '../Button';
import SwitchButtons from '../SwitchButtons';
import { Errors, FormContainer} from './MessageFormStyle';

const MessageFormSchema = yup.object().shape({
    message: yup.string().required(),
    isMessagePrivate: yup.bool().required(),
  });

function MessageForm(props) {
    
    const [isMessagePrivate, setPrivacyValue] = useState(false);
    const privacyOptions =  [
        { "value": false, "text": "public" },
        { "value": true, "text": "private" }
      ];

    const { register, errors, handleSubmit, setValue} = useForm({
        validationSchema: MessageFormSchema,
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {
            message: "",
            isMessagePrivate: false
          }
      });

    const handlePrivacyChange = isMessagePrivate => {
        setValue("isMessagePrivate", isMessagePrivate);
        setPrivacyValue(isMessagePrivate);
      };

    const submitClickHandler  = (data, e) => {
        props.submitClickHandler(data);
        e.target.reset(); 
        setPrivacyValue(false);
        setValue("isMessagePrivate", false);

      };

    React.useEffect(() => {
        register({ name: "isMessagePrivate" });  
      }, [register]);

    return (
       <FormContainer >
           <Row>
               <Col style={{padding: 0}}>
                    <Form onSubmit={handleSubmit(submitClickHandler)}>
                        <Form.Group as={Row} controlId="messageRow">
                            <Col xs={12}>
                                <Form.Control as="textarea" rows="3" name="message" ref={register({ required: true })} />
                                {errors.message && <Errors>{errors.message.message}</Errors>}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="buttons" className="float-right">
                            <Col xs={12}>
                                <SwitchButtons 
                                    buttonType={"radio"}
                                    nameIdentifier={"privacyOptions"}
                                    options={privacyOptions}
                                    value={isMessagePrivate} 
                                    onChange={handlePrivacyChange}
                                />
                                <Button buttonType="submit" classIdentifier="btn btn-dark">
                                Post
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </FormContainer>
  );
}

export default MessageForm;









