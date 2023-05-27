
import { Dashboard } from './components/Dashboard'
import { Signin } from './components/Sign_In'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'

export default function App() {
  return (
    <>
    <AuthContextProvider>

      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </AuthContextProvider>
    
    </>
  )
}
