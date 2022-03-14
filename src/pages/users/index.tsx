import { getUsers } from '@Helpers/users'
import Template from '@Templates/index'

const HomePage = ({ authors }) => {
  return (
    <Template>
      <div className="d-flex align-items-center mt-4 mb-4">
        <h2 className="h4 m-0">Faça seu cadastro</h2>
        <form>
          <a className="btn btn-primary ms-auto"></a>
        </form>
        Cadastrar
      </div>
    </Template>
  )
}

export async function getServerSideProps() {
  const users = '' //await getUsers()
  return { props: { users } }
}

export default HomePage
