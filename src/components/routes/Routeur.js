import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
// import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navigation from '../layout/navigation'
import ListEquipage from '../pages/ListEquipage'
import Membre from '../pages/Membre'
import Home from '../pages/Home'
import Rockets from '../pages/Rockets'
import History from '../pages/History'
import Quiz from '../pages/Quiz'
import QuizTest from '../pages/QuizTest'
import NotFound from './error-page'

const Routeur = () => {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/history' element={<History />} />
				<Route path='/rockets' element={<Rockets />} />
				<Route path='/rocket/:id' element={<Rockets />} />
				<Route path='/crew' element={<ListEquipage />} />
				<Route path='/crew/:id' element={<Membre />} />
				<Route path='/quiz' element={<Quiz />} />
				<Route path='/quizTest/:type/:id' element={<QuizTest />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Routeur
