import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import OffersPage from './pages/Offers/OffersPage'
import SingleOffer from './pages/SingleOffer/SingleOffer'
import Footer from './components/Footer/Footer'
import ScrollToTop from './helpers/ScrollTop'
import AddOffer from './pages/AddOffer/AddOffer'
import { Layout } from 'antd'

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/offers' element={<OffersPage />} />
          <Route path='/offers/:id' element={<SingleOffer />} />
          <Route path='/add-offer' element={<AddOffer />} />
        </Routes>
        {/* <Footer /> */}
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
    </Layout>
  )
}

export default App
