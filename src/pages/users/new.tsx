import { saveUser } from '@Helpers/users'
import { useEffect, useState } from 'react'
import Router from 'next/router'

import Template from '@Templates/index'

const defaultUserData = {
  name: '',
  email: '',
  password: ''
}

const NewUser = (props) => {
  const [userData, setUserData] = useState(defaultUserData)

  async function submit(e) {
    e.preventDefault()

    await saveUser(userData)

    setUserData(defaultUserData)
    Router.push('/')
  }

  function inputChange(e) {
    const data = { ...userData }
    data[e.target.name] = e.target.value

    setUserData(data)
  }

  return (
    <Template>
      <h3>Faça seu cadastro</h3>

      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={userData.name}
            onChange={inputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
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
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Cadastrar
        </button>
        <a href="/" className="btn btn-secondary ms-2">
          voltar
        </a>
      </form>
    </Template>
  )
}

export default NewUser
