import React from 'react'
import './App.css';
import PostForm from './Components/PostForm'
import Posts from './Components/Posts'
import Messages from './Components/Messages'

function App() {
  return (
    <div className="App">
      <PostForm />
      <Posts />
      <Messages />
    </div>
  );
}

export default App;
