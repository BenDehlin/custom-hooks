import React from 'react'
import useAuth from '../hooks/useAuth'
// import {useSelector, useDispatch} from 'react-redux'
// import {setUser} from '../redux/authReducer'

const User = (props) => {
  useAuth()
  return(
    <div></div>
  )
}

export default User