import React, { useState, useEffect } from "react"
import axios from "axios"
import {  useLocation, useNavigate } from "react-router-dom"
import { Button, Container, Form, Input, Link, Title, Wrapper } from "./styles"

const EditUser = () => {
 const navigate = useNavigate();
 const location = useLocation();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: ""
  })

  const { name, username, email, phone } = user
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  let id = location.pathname.split("/")[2]

  useEffect(() => {
    loadUser()
  }, [])

  const onSubmit = async e => {
    e.preventDefault()
    await axios.patch(`http://localhost:4200/api/v1/users/${id}`, user)
    navigate("/")
  }

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:4200/api/v1/users/${id}`)
    setUser(result.data)
  }

  return (
    <Container>
      <Wrapper>
        <Title>Edit A User</Title>
        <Form onSubmit={e => onSubmit(e)}>
          <Input
            type='text'
            className='form-control form-control-lg'
            placeholder='Enter Your Name'
            name='name'
            value={name}
            onChange={handleChange}
          />

          <Input
            type='text'
            className='form-control form-control-lg'
            placeholder='Enter Your Username'
            name='username'
            value={username}
            onChange={handleChange}
          />

          <Input
            type='email'
            className='form-control form-control-lg'
            placeholder='Enter Your E-mail Address'
            name='email'
            value={email}
            onChange={handleChange}
          />

          <Input
            type='text'
            className='form-control form-control-lg'
            placeholder='Enter Your Phone Number'
            name='phone'
            value={phone}
            onChange={handleChange}
          />

          <Button>Update User</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default EditUser
