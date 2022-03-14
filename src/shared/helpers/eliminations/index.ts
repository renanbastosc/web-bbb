import axios from 'axios'
import { TConfig } from 'types/config'

const { apiUrl } = process.env.config as unknown as TConfig

const config = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjQ3MjA5OTg4LCJleHAiOjE2NDgwNzM5ODh9.6sExc4mK_dwnUnn-SG4fg9c_DMWfG-oA90Dgtv7qxd4'
  }
}

export const getCurrentElimination = async () => {
  const url = `${apiUrl}/elimination`
  const response = await axios.get(url)
  return response.data
}

export const getOneElimination = async (id) => {
  try {
    const url = `${apiUrl}/eliminations/${id}`
    const response = await axios.get(url, config)
    return response.data
  } catch (e) {
    console.log(e)
  }
}

export const getEliminations = async () => {
  try {
    const url = `${apiUrl}/eliminations/`
    const response = await axios.get(url, config)
    return response.data
  } catch (e) {
    console.log(e)
  }
}
