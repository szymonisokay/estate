import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import OffersPage from './pages/Offers/OffersPage'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/offers' element={<OffersPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default App
