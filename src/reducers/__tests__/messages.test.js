import messageReducer from '../messageReducer';
import { FETCH_MESSAGES, CREATE_MESSAGE } from '../../actions/actionTypes';


describe('Message Reducer', () => {
  it('returns correct initial state', () => {
    expect(messageReducer(undefined, {})).toEqual([]);
  });

  it('returns current state if no action matched', () => {
    const curState = [
        {
            "_id": "5f3c37899b18ba0042938852",
            "message": "Sed quis facilisis felis. Mauris facilisis magna eu risus laoreet tempus. Cras rutrum est vel gravida commodo. Fusce non iaculis tortor.Donec non congue enim. Sed luctus porta magna vitae ornare. Duis leo mi, rhoncus vitae accumsan eu, tempus id nunc.",
            "isMessagePrivate": false,
            "createdAt": "2020-08-18T20:18:18.106Z",
        },
    ];
    const nextState = messageReducer(curState, {});
    expect(nextState).toBe(curState) // compare pointers
    expect(nextState).toEqual(curState); // compare values
  });

  it('create message when receiving CREATE_MESSAGE action', () => {
    const curState = [
        {
            "_id": "5f3c37899b18ba0042938852",
            "message": "Sed quis facilisis felis. Mauris facilisis magna eu risus laoreet tempus. Cras rutrum est vel gravida commodo. Fusce non iaculis tortor.Donec non congue enim. Sed luctus porta magna vitae ornare. Duis leo mi, rhoncus vitae accumsan eu, tempus id nunc.",
            "isMessagePrivate": false,
            "createdAt": "2020-08-18T20:18:18.106Z",
        },
    ];
    const action = {
      type: CREATE_MESSAGE,
      payload:  {
        _id: "5f3c38409b18ba0042938853",
        body: {
            "_id": "5f3c38409b18ba0042938853",
            "message": "Sed quis facilisis felis. Mauris facilisis magna eu risus laoreet tempus. Cras rutrum est vel gravida commodo. Fusce non iaculis tortor.Donec non congue enim. Sed luctus porta magna vitae ornare. Duis leo mi, rhoncus vitae accumsan eu, tempus id nunc.",
            "isMessagePrivate": true,
            "createdAt": "2020-08-18T20:21:20.844Z",
            }
        }
        };
    const nextState = messageReducer(curState, action);
    const expectedState = [
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
    expect(nextState).toEqual(expectedState);
  });

  it('get messages when receiving FETCH_MESSAGES action', () => {
    const curState = [];
    const action = {
      type: FETCH_MESSAGES,
      payload: [
        {
            "_id": "5f3c38409b18ba0042938853",
            "message": "Sed quis facilisis felis. Mauris facilisis magna eu risus laoreet tempus. Cras rutrum est vel gravida commodo. Fusce non iaculis tortor.Donec non congue enim. Sed luctus porta magna vitae ornare. Duis leo mi, rhoncus vitae accumsan eu, tempus id nunc.",
            "isMessagePrivate": true,
            "createdAt": "2020-08-18T20:21:20.844Z",
        },
        {
            "_id": "5f3c37899b18ba0042938852",
            "message": "Sed quis facilisis felis. Mauris facilisis magna eu risus laoreet tempus. Cras rutrum est vel gravida commodo. Fusce non iaculis tortor.Donec non congue enim. Sed luctus porta magna vitae ornare. Duis leo mi, rhoncus vitae accumsan eu, tempus id nunc.",
            "isMessagePrivate": false,
            "createdAt": "2020-08-18T20:18:18.106Z",
        },
      ],
    };
    const nextState = messageReducer(curState, action);
    const expectedState = [
        {
            "_id": "5f3c38409b18ba0042938853",
            "message": "Sed quis facilisis felis. Mauris facilisis magna eu risus laoreet tempus. Cras rutrum est vel gravida commodo. Fusce non iaculis tortor.Donec non congue enim. Sed luctus porta magna vitae ornare. Duis leo mi, rhoncus vitae accumsan eu, tempus id nunc.",
            "isMessagePrivate": true,
            "createdAt": "2020-08-18T20:21:20.844Z",
        },
        {
            "_id": "5f3c37899b18ba0042938852",
            "message": "Sed quis facilisis felis. Mauris facilisis magna eu risus laoreet tempus. Cras rutrum est vel gravida commodo. Fusce non iaculis tortor.Donec non congue enim. Sed luctus porta magna vitae ornare. Duis leo mi, rhoncus vitae accumsan eu, tempus id nunc.",
            "isMessagePrivate": false,
            "createdAt": "2020-08-18T20:18:18.106Z",
        },
      ];
    expect(nextState).toEqual(expectedState);
  });
});