import { Route, Routes } from "react-router-dom"
import { EditUser, Home, Login, Register } from "./pages"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/users/:id' element={<EditUser />} />
      </Routes>
    </>
  )
}

export default App
