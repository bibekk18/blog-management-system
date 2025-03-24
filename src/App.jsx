
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './Pages/auth/Register'
import Login from './Pages/auth/Login'
import AddBlog from './Pages/blog/AddBlog'
import Home from './Pages/blog/Home'
import EditBlog from './Pages/blog/EditBlog'
import SingleBlock from './Pages/blog/SingleBlock'

function App() {
  

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/blog/add" element={<AddBlog/>}/>
          <Route path="/blog/edit" element={<EditBlog/>}/>
          <Route path="/blog/:id" element={<SingleBlock/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
