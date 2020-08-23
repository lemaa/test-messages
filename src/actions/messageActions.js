
import axios from 'axios';
import {MESSAGE_ENDPOINT} from '../constants';
import {FETCH_MESSAGES, CREATE_MESSAGE } from './actionTypes';

const createMessage = (data) => {
  return async (dispatch) => {
    try
      {
        const response = await axios.post(`${ MESSAGE_ENDPOINT }/create`, data);
        dispatch(createMessageSuccess(response.data));
      }
      catch (error)
      {
          throw (error);
      }
  };
};

const createMessageSuccess =  (data) => {
  return {
    type: CREATE_MESSAGE,
    payload: {
      _id: data.message._id,
      body: data.message
    }
  };
};

  

const fetchMessages = (messages) => {
   return {
    type: FETCH_MESSAGES,
    payload: messages 
    
  };
};

const fetchAllMessages = () => {
  return async (dispatch) => {
    try
      {  
          const response = await axios.get(`${ MESSAGE_ENDPOINT }/messages`);
          dispatch(fetchMessages(response.data));
      }
      catch (error)
      {
          throw (error);
      }
  };
};

export {
    createMessage,
    createMessageSuccess,
    fetchMessages,
    fetchAllMessages
};
