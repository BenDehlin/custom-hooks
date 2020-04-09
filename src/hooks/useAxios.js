import { useState, useEffect } from "react"
import axios from "axios"

const useAxios = (dataName, initialData = []) => {
  const url = `/api/${dataName}`
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
      .then(({ data }) => setAxiosData(data))
      .catch((err) => console.log(err))
  }, [dataName])

  return [
    axiosData,
    {
      [getAxios]: () => {
        axios
          .get(url)
          .then(({ data }) => setAxiosData(data))
          .catch((err) => console.log(err))
      },
      [postAxios]: (body) => {
        axios
          .post(url, body)
          .then(({ data }) => setAxiosData(data))
          .catch((err) => console.log(err))
      },
      [putAxios]: (id, body) => {
        axios
          .put(`${url}/${id}`, body)
          .then(({ data }) => setAxiosData(data))
          .catch((err) => console.log(err))
      },
      [deleteAxios]: (id) => {
        axios
          .delete(`${url}/${id}`)
          .then(({ data }) => setAxiosData(data))
          .catch((err) => console.log(err))
      },
    },
  ]
}

export default useAxios
