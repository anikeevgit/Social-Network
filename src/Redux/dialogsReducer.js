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
}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      }
    }
    default:
      return state
  }
}
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer
