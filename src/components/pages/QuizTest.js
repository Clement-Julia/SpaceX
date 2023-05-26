import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import '../../assets/style/components/History.css'
import Quizz from '../data/quiz'

const QuizTest = () => {
	const [data, setData] = useState([])
	const { id, type } = useParams()
	const navigate = useNavigate()

	let quizz = Quizz[type]['quizz'][id]

	if (!quizz) {
		navigate('/quiz/')
		toast.error(`Aucun quiz trouvé`)
	}

	return (
		<div className='container mt-10'>
			<div>
				<h1 className='mb-2'>{quizz.title}</h1>
				{quizz.questions.map((quiz, i) => {
					return (
						<div className='container pb-3' key={i}>
							<h4>{quiz.question}</h4>
							{quiz.answers.map((answer, a) => {
								return (
									<div key={a} className='form-check'>
										<input className="form-check-input" id={`answer-${i}`} name={`answer-${i}`} type='radio' />
										<label className='form-check-label' htmlFor='flexRadioDefault1'>
											{answer.answer}
										</label>
									</div>
								)
							})}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default QuizTest
