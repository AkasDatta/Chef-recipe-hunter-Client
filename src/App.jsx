
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pages/Shared/Header/Header'
import Footer from './pages/Shared/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {


  return (
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
  )
}

export default App
