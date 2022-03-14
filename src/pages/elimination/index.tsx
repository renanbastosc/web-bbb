import { saveVote } from '@Helpers/votes'
import { getCurrentElimination } from '@Helpers/eliminations'
import Template from '@Templates/index'

const Elimination = ({ elimination }) => {
  return (
    <Template>
      <div className="d-flex align-items-center mt-4 mb-4">
        <h2 className="h4 m-0">Recursos</h2>
        <a href="eliminations/new" className="btn btn-primary ms-auto">
          Cadastrar
        </a>

        {elimination.id}
        {elimination.date}
      </div>
    </Template>
  )
}

export async function getServerSideProps() {
  const elimination = await getCurrentElimination()
  return { props: { elimination } }
}

export default Elimination
