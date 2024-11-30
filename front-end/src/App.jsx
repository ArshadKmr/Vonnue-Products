import './App.css'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import Products from './components/products/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
