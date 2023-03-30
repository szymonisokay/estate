import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import Header from './components/Header'
import SingleOffer from './pages/SingleOffer'
import { Layout } from 'antd'
import AddOffer from './pages/AddOffer/AddOffer'
import Account from './pages/Account/Account'
import Offers from './pages/Account/components/Offers'
import Bookmarks from './pages/Account/components/Bookmarks'
import EditAccount from './pages/Account/components/EditAccount'
import Dashboard from './pages/Account/components/Dashboard'
import ProtectedRoute from './helpers/ProtectedRoute'
import Checkout from './pages/Checkout'
import Transactions from './pages/Account/components/Transactions'
import AllOffers from './pages/Account/components/AllOffers'
import AllUsers from './pages/Account/components/AllUsers'
import SingleUser from './pages/SingleUser'

function App() {
	return (
		<Layout style={{ minHeight: '100vh', maxWidth: '1400px', margin: '0 auto' }}>
			<Router>
				<Header />
				<Routes>
					<Route
						path=''
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route
						path='/offers/:id'
						element={
							<ProtectedRoute>
								<SingleOffer />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/offer/add'
						element={
							<ProtectedRoute>
								<AddOffer />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/offer/edit/:id'
						element={
							<ProtectedRoute>
								<AddOffer />
							</ProtectedRoute>
						}
					/>
					<Route
						path='checkout'
						element={
							<ProtectedRoute>
								<Checkout />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/account'
						element={
							<ProtectedRoute>
								<Account />
							</ProtectedRoute>
						}
					>
						<Route index element={<Dashboard />} />
						<Route path='edit-account' element={<EditAccount />} />
						<Route path='offers' element={<Offers />} />
						<Route path='bookmarks' element={<Bookmarks />} />
						<Route path='transactions' element={<Transactions />} />
						<Route path='all-offers' element={<AllOffers />} />
						<Route path='all-users' element={<AllUsers />} />
					</Route>
					<Route
						path='/users/:id'
						element={
							<ProtectedRoute>
								<SingleUser />
							</ProtectedRoute>
						}
					/>
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
		</Layout>
	)
}

export default App
