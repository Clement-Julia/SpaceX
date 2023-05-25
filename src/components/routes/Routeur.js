import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navigation from '../layout/navigation'

import Home from '../pages/Home'
import Rockets from '../pages/Rockets'
import NotFound from './error-page'

const Routeur = () => {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/rockets' element={<Rockets />} />
				<Route path='/rocket/:id' element={<Rockets />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Routeur
