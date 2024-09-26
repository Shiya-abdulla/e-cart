import { useState } from 'react'
import './bootstrap.min.css'
import './App.css'
import Home from './pages/Home'
import View from './pages/View'
import Cart from './pages/Cart'
import Wish from './pages/Wish'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/view/:id' element={<View/>} />
  <Route path='/wish' element={<Wish/>} />
  <Route path='/cart' element={<Cart/>} />
</Routes>
<Footer/>
<ToastContainer />
    </>
  )
}

export default App
