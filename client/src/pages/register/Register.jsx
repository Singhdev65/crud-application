import { useState } from "react"
import {
  Agreement,
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper
} from "./styles"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: ""
  })
  const navigate = useNavigate()

  const handleChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4200/api/v1/users/register`, user);
    navigate("/")
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder='name'
            value={user.name}
            name='name'
            onChange={handleChange}
          />
          <Input
            placeholder='email'
            value={user.email}
            name='email'
            onChange={handleChange}
          />
          <Input
            placeholder='password'
            value={user.password}
            name='password'
            onChange={handleChange}
          />
          <Input
            placeholder='confirm password'
            value={user.passwordConfirm}
            name='passwordConfirm'
            onChange={handleChange}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleSubmit}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
