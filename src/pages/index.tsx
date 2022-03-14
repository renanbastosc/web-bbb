import { getCurrentElimination } from '@Helpers/eliminations'
import { saveVote } from '@Helpers/votes'
import { useEffect, useState } from 'react'

import Template from '@Templates/index'
import Login from '@Components/Login'
import HouseGuest from '@Components/HouseGuest'

const HomePage = ({ elimination }) => {
  const [voteSuccess, setVoteSuccess] = useState(false)

  const vote = async (guestId: any) => {
    const response = await saveVote(guestId)

    if (response.ok) {
      setVoteSuccess(true)
    }
  }

  return (
    <Template>
      <Login />
      <h2 className="h4 mt-4">Paredão aberto</h2>
      {voteSuccess && (
        <span className="">Parabéns, você votou com sucesso</span>
      )}
      {elimination && (
        <>
          <div className="container">
            <h6>Vote para eliminar</h6>
            {elimination.house_guests.map((guest) => (
              <a
                onClick={() => vote({ house_guest_id: guest.id })}
                className="btn btn-primary m-1"
                key={guest.id}
              >
                <HouseGuest houseGuest={guest} />
              </a>
            ))}
          </div>
        </>
      )}
    </Template>
  )
}

export async function getServerSideProps() {
  const elimination = await getCurrentElimination()

  return { props: { elimination } }
}

export default HomePage
