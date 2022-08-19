import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatus from '../ProfileStatus/ProfileStatus'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img
          className={s.page}
          src='https://sun9-82.userapi.com/impf/jtWMX4gXfMNmOroVFJO12WPoH0SPO5FmlQFpbA/SAoALVOZQIg.jpg?size=1590x530&quality=95&crop=0,0,1920,640&sign=8da84aad5e5a775f35779c308d6075ca&type=cover_group'
          alt='fon'
        />
      </div>
      <div className={s.descriptionBlock}>
        <div className={s.ava}>
          <img
            src={
              props.profile.photos.large != null
                ? props.profile.photos.large
                : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/14e99159d3ee3bee5393cb3223a6eec4ad1726be-1574853343.jpg'
            }
            alt='avatar'
          />
        </div>

        <div className={s.description}>
          <ProfileStatus
            status={props.status}
            updateUserStatus={props.updateUserStatus}
          />
          {/* <p></p> */}
          {/* <p>Это я на Набу</p> */}
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
