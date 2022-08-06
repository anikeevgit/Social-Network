import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={s.page}
          src='https://sun9-82.userapi.com/impf/jtWMX4gXfMNmOroVFJO12WPoH0SPO5FmlQFpbA/SAoALVOZQIg.jpg?size=1590x530&quality=95&crop=0,0,1920,640&sign=8da84aad5e5a775f35779c308d6075ca&type=cover_group'
          alt='fon'
        />
      </div>
      {/* <div className={s.left}>
        <img
          className={s.lls}
          src='https://www.seekpng.com/png/full/154-1542974_purple-lightsaber-icon-purple-lightsaber.png'
        />
      </div> */}
      <div className={s.descriptionBlock}>
        <div className={s.ava}>
          <img
            src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/14e99159d3ee3bee5393cb3223a6eec4ad1726be-1574853343.jpg'
            alt='avatar'
          />
        </div>
        <div className={s.description}>
          <p>Это я на Набу</p>
        </div>
      </div>
      {/* <div className={s.right}>
        <img
          className={s.rls}
          src='https://www.seekpng.com/png/full/154-1542974_purple-lightsaber-icon-purple-lightsaber.png'
        />
      </div> */}
    </div>
  )
}

export default ProfileInfo
