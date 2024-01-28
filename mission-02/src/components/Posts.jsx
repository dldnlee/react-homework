import './Posts.css';
import postData from '../data/posts.json';

function Post(props) {
  return (
    <button type="button" className='post-instance'>
      <div className='post-badge'>{props.category}</div>
      <h2 className='post-title'>{props.title.length > 20 ? props.content.slice(0, 20) + "..." : props.title}</h2>
      <p className='post-content'>{props.content.length > 30 ? props.content.slice(0, 30) + "..." : props.content}</p>
      <p className='post-location'>{props.location}</p>
    </button>
  )
}

const posts = postData.map(post => {
  return (
    <Post
      key={post.id}
      {...post}
    />
  )
})

export default function Posts() { 
  return (
    <div className="post-container">
      {posts}
    </div>
  )
}