import React , { useState } from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUser } from '@fortawesome/free-solid-svg-icons';
import ReadMoreReact from 'read-more-react';
import {MessageContainer, TextRow, DateRow}  from './MessageStyle';

function Message(props) { 

    const [id] = useState(props._id);
    const [text] = useState(props.text);
    const [isMessagePrivate] = useState(props.isMessagePrivate);
    const [createdAt] = useState(props.createdAt);

  return (
        <MessageContainer  id={id}>
            <TextRow>
                <Col> 
                    {text ? <ReadMoreReact 
                        text={text}
                        min={300}
                        ideal={350}
                        max={400}
                        readMoreText="Read more"/>: null}

                </Col>
            </TextRow>
            <DateRow>
                <Col>
                    {isMessagePrivate ? <FontAwesomeIcon icon={faUser} size="xs"/> : <FontAwesomeIcon icon={faUsers} size="xs"/>}
                     <small> {createdAt} </small>
                </Col>
            </DateRow>
        </MessageContainer>
    );
};

Message.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isMessagePrivate: PropTypes.bool.isRequired,
    createdAt: PropTypes.any.isRequired
  };
export default Message;