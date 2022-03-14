import axios from 'axios'
import { TConfig } from 'types/config'

const { apiUrl } = process.env.config as unknown as TConfig

export const createSession = async (userObject) => {
  const response = await axios.post(`${apiUrl}/sessions`, userObject)
  return response.data
}

export const getSession = async (userEmail) => {
  const token = ''
  return token
}
