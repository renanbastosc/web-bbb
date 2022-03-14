import { getEliminations, getOneElimination } from '@Helpers/eliminations'
import { dateFormat } from '@Helpers/util'
import Template from '@Templates/index'
import moment from 'moment'
import router from 'next/router'
import { useState } from 'react'

const oneStatistics = {
  id: Number,
  date: Date,
  current: Boolean,
  total_votes: Number,
  house_guests: []
}

const HomePage = ({ eliminations }) => {
  const [statistic, setStatistic] = useState(oneStatistics)
  const [showStatistic, setShowStatistic] = useState(false)

  const goToElimination = async (id) => {
    const resp = await getOneElimination(id)

    setShowStatistic(true)
    setStatistic(resp)
  }

  return (
    <Template>
      <>
        <div className="d-flex align-items-center mt-4 mb-4">
          <h2 className="h4 m-0">Estatísticas dos Paredões</h2>
        </div>

        {eliminations.map((elimination) => (
          <a
            onClick={() => goToElimination(elimination.id)}
            className="btn btn-primary m-1"
            key={elimination.id}
          >
            Paredão {elimination.id} - {elimination.date}
          </a>
        ))}

        {showStatistic ? (
          <div>
            <div>
              <span>paredão do dia {statistic.date}</span>
            </div>
            <span>Participantes emparedados</span>
            <ul>
              {statistic.house_guests.map((guest) => (
                <li key={guest.id}>
                  {guest.name} teve {guest.votes} votos (
                  {(
                    (Number(guest.votes) / Number(statistic.total_votes)) *
                    100
                  ).toPrecision(4)}
                  %)
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>Clique em um paredão acima para obter estatisticas</div>
        )}

        <div>
          <a className="btn btn-secondary mt-3 ms-2" href="/">
            voltar
          </a>
        </div>
      </>
    </Template>
  )
}

export async function getServerSideProps() {
  const eliminations = await getEliminations()
  return { props: { eliminations } }
}

export default HomePage
