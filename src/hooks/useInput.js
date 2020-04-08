import { useState } from "react"

const useInput = (initialState) => {
  const [values, setValues] = useState(initialState)
  return [
    values,
    //Set Values
    ({ target }) => {
      setValues({
        ...values,
        [target.name]: target.value,
      })
    },
    //Reset Values
    () => {
      for(let key in values){
        setValues({[key]: ''})
      }
    }
  ]
}

export default useInput