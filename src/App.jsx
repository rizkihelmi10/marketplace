import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import { useStore } from '../src/store/useStore'
import MarketplacePage from './pages/Marketplace'
import { Routes, Route } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)
  const isLoggedIn = useStore(state => state.isLoggedIn);

  return (
    <>
    {isLoggedIn ? <MarketplacePage/> : <LoginPage />}

    {/* <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes> */}
       
    </>
  )
}

export default App
