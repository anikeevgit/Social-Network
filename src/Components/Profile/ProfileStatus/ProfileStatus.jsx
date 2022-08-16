import React from 'react'
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
  statusInputRef = React.createRef()

  state = {
    editMode: false,
    status: this.props.status,
  }

  activateEditMode = () => {
    this.setState({ editMode: true })
  }
  deactivateEditMode = () => {
    this.setState({ editMode: false })
    this.props.updateUserStatus(this.state.status)
  }
  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value }) 
  }

  render() {
    return (
      <div className={s.status}>
        {this.state.editMode === false ? (
          <div className={s.test}>
            <p onDoubleClick={this.activateEditMode}>{this.props.status || 'Frontend'}</p>
          </div>
        ) : (
          <div>
            <input
              onChange={this.onStatusChange}
              onBlur={this.deactivateEditMode}
              autoFocus={true}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    )
  }
}

export default ProfileStatus
