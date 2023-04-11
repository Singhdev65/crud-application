import { useState } from "react"
import { Button, Container, Form, Input, Link, Title, Wrapper } from "./styles"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate()

  const handleChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await axios.post(`http://localhost:4200/api/v1/users/login`, user)
    navigate("/")
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder='username'
            name='email'
            value={user.email}
            onChange={handleChange}
          />
          <Input
            placeholder='password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />
          <Button onClick={handleSubmit}>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
