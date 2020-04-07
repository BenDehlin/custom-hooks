import { useState, useEffect } from "react"
import axios from "axios"

const useAxios = (url, dataName = "axios", initialData = []) => {
  const camelCaseDataName =
    dataName.substr(0, 1).toUpperCase() + dataName.substr(1).toLowerCase()
  const getAxios = `get${camelCaseDataName}`
  const postAxios = `post${camelCaseDataName}`
  const putAxios = `put${camelCaseDataName}`
  const deleteAxios = `delete${camelCaseDataName}`
  const [axiosData, setAxiosData] = useState(initialData)
  useEffect(() => {
    axios
      .get(url)
      .then((results) => {
        setAxiosData(results.data)
      })
      .catch((err) => console.log(err))
  }, [url, dataName])

  return [
    axiosData,
    {
      [getAxios]: () => {
        axios
          .get(url)
          .then((results) => {
            setAxiosData(results.data)
          })
          .catch((err) => console.log(err))
      },
      [postAxios]: (body) => {
        axios
          .post(url, body)
          .then((results) => {
            setAxiosData(results.data)
          })
          .catch((err) => console.log(err))
      },
      [putAxios]: (id, body) => {
        axios.put(`${url}/${id}`, body).then((results) => {
          setAxiosData(results.data)
        })
      },
      [deleteAxios]: (id) => {
        axios.delete(`${url}/${id}`).then((results) => {
          setAxiosData(results.data)
        })
      },
    },
  ]
}

export default useAxios
