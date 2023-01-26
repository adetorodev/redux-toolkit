
import {  BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { PostsList } from './features/posts/PostsList'
import { AddPostForm } from './features/posts/AddPostForm'
import { SinglePostPage } from './features/posts/SinglePostPage'

function App() {
  return (
    <Router>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path="/" element={<PostsList />}/>
        <Route path="/add-post" element={<AddPostForm />}/>
        <Route path="/posts/:postId" element={<SinglePostPage />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
