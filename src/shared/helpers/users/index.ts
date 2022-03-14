import axios from 'axios'
import { TConfig } from 'types/config'

const { apiUrl } = process.env.config as unknown as TConfig

export const getUsers = async () => {
  const response = await axios.get(`${apiUrl}/users`)

  const data = response.data

  return data._embedded.users
}

export const showUser = async (id) => {
  const response = await axios.get(`${apiUrl}/users/${id}`)

  return response.data
}

export const saveUser = async (userObject) => {
  const response = await axios.post(`${apiUrl}/users`, userObject)

  return response.data
}
