import { showUser } from '@Helpers/users'
import axios from 'axios'
import { TConfig } from 'types/config'

const { apiUrl } = process.env.config as unknown as TConfig

const validToken = () => {
  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjQ3MjA0MzIwLCJleHAiOjE2NDgwNjgzMjB9.SjMT3o8r0jCR6Hzy72RhzzdwT4dOF4Ky3UGuxLP0quY'
}

export const saveVote = async (bodyParameters) => {
  let config = {
    headers: {
      Authorization: 'Bearer ' + validToken()
    }
  }
  const response = await axios.post(`${apiUrl}/votes`, bodyParameters, config)

  return response.data
}
