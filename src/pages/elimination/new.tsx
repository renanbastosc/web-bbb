import { saveVote } from '@Helpers/votes'
import { useEffect, useState } from 'react'
import Router from 'next/router'

import Template from '@Templates/index'

const VoteToEliminate = (props) => {
  async function submit(e) {
    e.preventDefault()
    Router.push('/eliminations')
  }

  return (
    <Template>
      <h3>Cadastrar Paredão</h3>

      <form onSubmit={submit}>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Cadastrar
          </button>
          <a href="/eliminations" className="btn btn-secondary ms-2">
            Voltar
          </a>
        </div>
      </form>
    </Template>
  )
}

export default VoteToEliminate
