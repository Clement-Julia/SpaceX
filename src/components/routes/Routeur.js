import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Home from '../pages/Home'
import NotFound from './error-page'

const Routeur = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Routeur
