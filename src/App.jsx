
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './Pages/auth/Register'
import Login from './Pages/auth/Login'
import AddBlog from './Pages/blog/AddBlog'
import Home from './Pages/blog/Home'
import EditBlog from './Pages/blog/EditBlog'
import SingleBlock from './Pages/blog/SingleBlock'
import {Provider} from 'react-redux'
import store from '../store/store'
function App() {
  

  return (
    <Provider store ={store}>
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
    </Provider>
  )
}

export default App
