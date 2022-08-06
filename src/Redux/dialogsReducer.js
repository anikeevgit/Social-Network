const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'hello' },
    { id: 3, message: 'yo' },
  ],
  dialogs: [
    { id: 1, name: 'Yoda' },
    { id: 2, name: 'Darth' },
    { id: 3, name: 'R2' },
  ],
  newMessageBody: '',
}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageBody: action.body,
      }
    }
    case SEND_MESSAGE: {
      let body = state.newMessageBody
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: body }],
      }
    }
    default:
      return state
  }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  body: body,
})

export default dialogsReducer
