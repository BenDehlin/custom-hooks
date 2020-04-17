import React from 'react'
import './App.css';
import PostForm from './Components/PostForm'
import Posts from './Components/Posts'
import Messages from './Components/Messages'
import HookTutorial from './Components/HookTutorial';
import User from './Components/User'
import routes from './routes'

function App() {
  return (
    <div className="App">
      {routes}
      {/* <HookTutorial />
      <PostForm />
      <Posts />
      <Messages />
      <User /> */}
    </div>
  );
}

export default App;
