
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './Pages/auth/Register'
import Login from './Pages/auth/Login'
import AddBlog from './Pages/blog/AddBlog'
import Home from './Pages/blog/Home'

function App() {
  

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/addblog" element={<AddBlog/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
