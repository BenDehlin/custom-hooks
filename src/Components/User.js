import React from 'react'
import useAuth from '../hooks/useAuth'
// import {useSelector, useDispatch} from 'react-redux'
// import {setUser} from '../redux/authReducer'

const User = (props) => {
  useAuth(true)
  return(
    <div></div>
  )
}

export default User