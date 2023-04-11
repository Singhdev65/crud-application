import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { Container, StyledTable } from "./styles"
import { useEffect, useState } from "react"

function Home() {
  const navigate = useNavigate()

  const [users, setUsers] = useState([
    { name: "Prince", active: "true", email: "prince@gmail.com" }
  ])

  const handleDelete = async (e, id) => {
    e.preventDefault()
    await axios.delete(`http://localhost:4200/api/v1/users/${id}`)
    navigate("/")
  }

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:4200/api/v1/users`)
    setUsers(response.data)
    return response.data
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container>
      <StyledTable>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Active</th>
            <th>Email</th>
            <th colSpan={2} className='text-center'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, i) => (
              <tr key={user.id ?? 1}>
                <td>{i + 1}</td>
                <td>{user.name}</td>
                <td>{user.active}</td>
                <td>{user.email}</td>
                <td className='text-right'>
                  <Link to={`/users/${user.id}`}>
                    <button className='button muted-button'>Edit</button>
                  </Link>
                </td>
                <td className='text-left'>
                  <button
                    onClick={e => handleDelete(e, user.id)}
                    className='button muted-button'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No users</td>
            </tr>
          )}
        </tbody>
      </StyledTable>
    </Container>
  )
}

export default Home
