import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import sinon from 'sinon';

import { FETCH_MESSAGES, CREATE_MESSAGE } from '../actionTypes';
import {createMessage, createMessageSuccess, fetchMessages,  fetchAllMessages } from '../messageActions';
import { MESSAGE_ENDPOINT } from '../../constants';

describe(' Message Action', () => {
  const mockStore = configureMockStore([thunk]);
  const store = mockStore({ messages: [] });
  let mockAxios;

  beforeEach(() => {
    mockAxios = sinon.mock(axios);
  });
  afterEach(() => {
    mockAxios.restore();
  });

  it('Should creates FETCH_MESSAGES action when calling fetchMessages()', () => {
    const messages = [
        {
            "_id": "5f3c37899b18ba0042938852",
            "message": "Sed quis facilisis felis. Mauris facilisis magna eu risus laoreet tempus. Cras rutrum est vel gravida commodo. Fusce non iaculis tortor.Donec non congue enim. Sed luctus porta magna vitae ornare. Duis leo mi, rhoncus vitae accumsan eu, tempus id nunc.",
            "isMessagePrivate": false,
            "createdAt": "2020-08-18T20:18:18.106Z",
        },
        {
            "_id": "5f3c38409b18ba0042938853",
            "message": "Sed quis facilisis felis. Mauris facilisis magna eu risus laoreet tempus. Cras rutrum est vel gravida commodo. Fusce non iaculis tortor.Donec non congue enim. Sed luctus porta magna vitae ornare. Duis leo mi, rhoncus vitae accumsan eu, tempus id nunc.",
            "isMessagePrivate": true,
            "createdAt": "2020-08-18T20:21:20.844Z",
        },
    ];

    const actual = fetchMessages(messages);
    const expected = {
      type: FETCH_MESSAGES,
      payload: messages,
    };
    expect(actual).toEqual(expected);
  });

  it('Should creates CREATE_MESSAGE action when calling createMessageSuccess()', () => {
    const data = {        
        message:
            {
                "_id": "5f42bbe8ce15ec0024792c76",
                "message": "Sed quis facilisis felis. Mauris facilisis magna eu risus laoreet tempus. Cras rutrum est vel gravida commodo. Fusce non iaculis tortor.Donec non congue enim. Sed luctus porta magna vitae ornare. Duis leo mi, rhoncus vitae accumsan eu, tempus id nunc",
                "isMessagePrivate": false,
                "createdAt": "2020-08-23T18:56:40.306Z",
            }
        };
    const actual = createMessageSuccess(data);
    const expected = {
        type: CREATE_MESSAGE,
        payload: {
          _id: data.message._id,
          body: data.message
        }
    };
    expect(actual).toEqual(expected);
  });

  it('Should dispatch FETCH_MESSAGES actions when calling fetchAllMessages()', () => {
    const messages = [{
        "_id": "5f3c37899b18ba0042938852",
        "message": "Sed quis facilisis felis. Mauris facilisis magna eu risus laoreet tempus. Cras rutrum est vel gravida commodo. Fusce non iaculis tortor.Donec non congue enim. Sed luctus porta magna vitae ornare. Duis leo mi, rhoncus vitae accumsan eu, tempus id nunc.",
        "isMessagePrivate": false,
        "createdAt": "2020-08-18T20:18:18.106Z",
    },
    {
        "_id": "5f3c38409b18ba0042938853",
        "message": "Sed quis facilisis felis. Mauris facilisis magna eu risus laoreet tempus. Cras rutrum est vel gravida commodo. Fusce non iaculis tortor.Donec non congue enim. Sed luctus porta magna vitae ornare. Duis leo mi, rhoncus vitae accumsan eu, tempus id nunc.",
        "isMessagePrivate": true,
        "createdAt": "2020-08-18T20:21:20.844Z",
    }];
    const expected = [
      {
        type: FETCH_MESSAGES,
        payload: messages,
      },
    ]
    const apiData = { status: 200, data: messages };
    const resApi = Promise.resolve(apiData);
    mockAxios.expects('get').once().withArgs(`${MESSAGE_ENDPOINT}/messages`, {}).returns(resApi);
    store.dispatch(fetchAllMessages()).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

  it('Should dispatch CREATE_MESSAGE actions when calling createMessage()', () => {
    const data = {
            "_id": "5f3c37899b18ba0042938852",
            "message": "Sed quis facilisis felis. Mauris facilisis magna eu risus laoreet tempus. Cras rutrum est vel gravida commodo. Fusce non iaculis tortor.Donec non congue enim. Sed luctus porta magna vitae ornare. Duis leo mi, rhoncus vitae accumsan eu, tempus id nunc.",
            "isMessagePrivate": false,
            "createdAt": "2020-08-18T20:18:18.106Z",
    };
    const expected = [
        {
            type: CREATE_MESSAGE,
            payload: {
              _id: data._id,
              body: data
            }
        }
    ];
    const apiData = { status: 201, data };
    const resApi = Promise.resolve(apiData);
    mockAxios.expects('post').once().withArgs(`${MESSAGE_ENDPOINT}/create`, { message: data.message, isMessagePrivate: data.isMessagePrivate }).returns(resApi);
    store.dispatch(createMessage(data.message)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
});