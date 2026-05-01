import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import LoginPage from './Pages/Login'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
 
      </Routes>
    </>
  )
}

export default App
