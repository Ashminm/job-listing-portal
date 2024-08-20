import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Header from './components/Header'

function App() {

  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<Landing/>}  />
        <Route path='/home' element={<Home/>}  />
        {/* <Route path='' /> */}
        <Route path={'/*'} element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
