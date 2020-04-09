import React from 'react'
import './App.css';
import PostForm from './Components/PostForm'
import Posts from './Components/Posts'
import Messages from './Components/Messages'
import HookTutorial from './Components/HookTutorial';

function App() {
  return (
    <div className="App">
      <HookTutorial />
      <PostForm />
      <Posts />
      <Messages />
    </div>
  );
}

export default App;
