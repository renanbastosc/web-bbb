import React, { useRef, useState } from 'react'

import { createSession } from '@Helpers/sessions'

import { TConfig } from 'types/config'
import router from 'next/router'

const defaultUserData = {
  email: '',
  password: ''
}

const Login = () => {
  const [userData, setUserData] = useState(defaultUserData)
  const [token, setToken] = useState('')

  async function submit(e) {
    e.preventDefault()

    if (userData.email && userData.password) {
      const resp = await createSession(userData)
      if (resp.token) {
        setToken(token)
      }
    }

    setUserData(defaultUserData)
    router.push('/')
  }

  const inputChange = (e: any) => {
    const data = { ...userData }
    data[e.target.name] = e.target.value

    setUserData(data)
  }

  return (
    <>
      {token != '' && (
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              required
              value={userData.email}
              onChange={inputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="affiliation">Senha</label>
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={inputChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      )}
    </>
  )
}

export default Login
