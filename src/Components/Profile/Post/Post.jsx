import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/14e99159d3ee3bee5393cb3223a6eec4ad1726be-1574853343.jpg'
        alt='post-avatar'
      />
      <p>Name</p>
      <p>{props.message}</p>
      <div>
        <span>Like {props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post
