import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import DashboardHome from './Components/DashboardHome'
import DashboardProfile from './Components/DashboardProfile'
import DashboardBloodReport from './Components/DashboardBloodReport'
import DashboardOrganHealth from './Components/DashboardOrganHealth'
import HumanOrgans from './Pages/HumanOrgans'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/body_organs' element={<HumanOrgans />} ></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path='profile' element={<DashboardProfile />}></Route>
          <Route path='blood-report' element={<DashboardBloodReport />}></Route>
          <Route path="organs" element={<DashboardOrganHealth />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
