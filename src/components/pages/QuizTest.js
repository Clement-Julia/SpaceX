import { useRef, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import '../../assets/style/components/History.css'
import Quizz from '../data/quiz'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[array[i], array[j]] = [array[j], array[i]]
	}
	return array
}

const QuizTest = () => {
	const [data, setData] = useState([])
	const [isPlaying, setIsPlaying] = useState(true)
	const { id, type } = useParams()
	const navigate = useNavigate()

	let quizz = Quizz[type]['quizz'][id]
	quizz.questions = shuffleArray(quizz.questions);
	let mark = 0
	let completed = false

	if (!quizz) {
		navigate('/quiz/')
		toast.error(`Aucun quiz trouvé`)
	}

	/**
	 * The function saves answers to a dataset based on the target's parent and answer data.
	 * @param e - The parameter "e" is an event object that is passed to the function when it is called.
	 * It contains information about the event that triggered the function, such as the target element and
	 * any data attributes associated with it. In this case, the function is likely being used as an event
	 * handler for a
	 */
	const saveAnswers = (e) => {
		data[e.target.dataset.parent] = e.target.dataset.answer
		setData(data)
	}

	/**
	 * The function shows the result of a quiz and displays a toast message based on the user's score.
	 */
	const showResult = () => {
		completed = true
		setIsPlaying(false)

		quizz.questions.map((quiz, i) => {
			quiz.answers.map((answer, a) => {
				let element = document.querySelector(`[data-parent='${quiz.id}'][data-answer='${answer.id}'][data-label='1']`)
				if (answer.correct == true) {
					console.log(answer.answer);
					console.log(element);
					console.log("")
					element.classList.add('text-green')
					if (answer.id == data[quiz.id]) {
						mark++
					}
				} else {
					element.classList.add('text-red')
				}
			})
		})

		if (mark >= 0 && mark <= 4) {
			toast.error(`Vous avez eu ${mark}/10`)
		} else if (mark > 4 && mark < 8) {
			toast.warning(`Vous avez eu ${mark}/10`)
		} else {
			toast.success(`Vous avez eu ${mark}/10`)
		}
	}

	/**
	 * The function renders a countdown timer with animation effects.
	 * @returns The function `renderTime` returns a JSX element that displays the remaining time. It also
	 * uses `useRef` and `useState` hooks to keep track of the current and previous time values, and to
	 * trigger a re-render when the time is up.
	 */
	const renderTime = ({ remainingTime }) => {
		if (completed) {
			remainingTime = 0
		}
		const currentTime = useRef(remainingTime)
		const prevTime = useRef(null)
		const isNewTimeFirstTick = useRef(false)
		const [, setOneLastRerender] = useState(0)

		if (currentTime.current !== remainingTime) {
			isNewTimeFirstTick.current = true
			prevTime.current = currentTime.current
			currentTime.current = remainingTime
		} else {
			isNewTimeFirstTick.current = false
		}

		if (remainingTime === 0) {
			setTimeout(() => {
				setOneLastRerender((val) => val + 1)
			}, 20)
		}

		const isTimeUp = isNewTimeFirstTick.current

		return (
			<div className='time-wrapper'>
				<div key={remainingTime} className={`time ${isTimeUp ? 'up' : ''}`}>
					{remainingTime && isPlaying ? remainingTime : `${mark}/10`}
				</div>
				{prevTime.current !== null && (
					<div key={prevTime.current} className={`time ${!isTimeUp ? 'down' : ''}`}>
						{prevTime.current}
					</div>
				)}
			</div>
		)
	}

	return (
		<div className='container pt-10'>
			<div className='pt-5'>
				<h1 className='mb-4'>{quizz.title}</h1>
				<div className='timer'>
					<div id='timer-element' className='timer-wrapper'>
						<CountdownCircleTimer isPlaying={isPlaying} duration={60} colors={['#69e279', '#f6ad06', '#901403']} colorsTime={[60, 30, 0]} onComplete={showResult}>
							{renderTime}
						</CountdownCircleTimer>
					</div>
				</div>
				{quizz.questions.map((quiz, i) => {
					quiz.answers = shuffleArray(quiz.answers);
					return (
						<div className='container pb-3' key={i}>
							<h4>{quiz.question}</h4>
							{quiz.answers.map((answer, a) => {
								return (
									<div key={a} className='form-check'>
										<input className='form-check-input uneditable-input' id={`answer-${i}`} name={`answer-${i}`} type='radio' onChange={(e) => saveAnswers(e)} data-parent={quiz.id} data-answer={answer.id} />
										<label className='form-check-label' htmlFor='flexRadioDefault1' data-label='1' data-parent={quiz.id} data-answer={answer.id}>
											{answer.answer}
										</label>
									</div>
								)
							})}
						</div>
					)
				})}
				<div className='d-flex justify-content-center'>
					<button className='btn btn-primary mb-2' onClick={showResult}>
						Valider
					</button>
				</div>
			</div>
		</div>
	)
}

export default QuizTest
