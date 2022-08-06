import Dialogs from './Dialogs'
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../Redux/dialogsReducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage() {
      dispatch(sendMessageCreator())
    },
  }
}

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs)

export default DialogsContainer
