import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import allActions from '../../actions';
import Message from '../../components/Message';
import MessageForm from '../../components/MessageForm';
import { MainContainer, NoMessages, MessageSection, FormSection} from './HomeStyle';

const Home = () => {

    const messages = useSelector(state => state.messages);
    const dispatch = useDispatch();
  
    const CreateMessageHandler = (data) => {
        const Message = {
            message: data.message,
            isMessagePrivate: data.isMessagePrivate
        }
        dispatch(allActions.messageActions.createMessage(Message));
 
      };

    useEffect(() => {
        dispatch(allActions.messageActions.fetchAllMessages());
    }, [dispatch]);
 
    return (
        <MainContainer className="main-section" fluid>
            <MessageSection>
                <Col>
                    {messages.length >0 && messages.map((message)=>
                        <Message key={message._id.toString()}
                            id= {message._id} 
                            text= {message.message}      
                            isMessagePrivate= {message.isMessagePrivate}      
                            createdAt= {moment(message.createdAt).fromNow()} 
                        >
                        </Message>
                    )}
                    {messages.length === 0 && <NoMessages>No messages to display :(</NoMessages>}
                </Col>
            </MessageSection>
            <FormSection>
                <Col>
                    <MessageForm submitClickHandler={CreateMessageHandler}/>
                </Col>
            </FormSection>
        </MainContainer>          
    );
  }
  
export default Home;
