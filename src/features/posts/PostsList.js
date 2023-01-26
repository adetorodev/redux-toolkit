import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPost } from './postsSlice'
import { Link } from 'react-router-dom'

export const PostsList = () => {
  const posts = useSelector(selectAllPost)

  const renderedPosts = posts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0,100)}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  ))
  return (
    <section>
      <h2>Post</h2>
      {renderedPosts}
    </section>
  )
}

