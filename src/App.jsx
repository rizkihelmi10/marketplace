import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import { useStore } from '../src/store/useStore'

function App() {
  const [count, setCount] = useState(0)
  const isLoggedIn = useStore(state => state.isLoggedIn);

  return (
    <>
    {isLoggedIn ? <Navbar /> : <LoginPage />}
       
    </>
  )
}

export default App
