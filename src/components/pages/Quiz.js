import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import '../../assets/style/components/History.css'
import Quizz from '../data/quiz'

const Quiz = () => {
	
	return (
		<div className='container mt-10'>
			<div className='accordion' id='accordionExample'>
				<h1 className='mb-3'>Quiz disponibles :</h1>
				{Quizz.map((quizType, x) => {
					return (
						<div key={x} className='accordion-item'>
							<h2 className='accordion-header' id={`heading${x}`}>
								<button className='collapsed accordion-button' type='button' data-bs-toggle='collapse' data-bs-target={`#collapse${x}`} aria-expanded='true' aria-controls={`collapse${x}`}>
									{quizType.type}
								</button>
							</h2>
							<div id={`collapse${x}`} className='accordion-collapse collapse' aria-labelledby={`heading${x}`} data-bs-parent='#accordionExample'>
								<div className='accordion-body d-flex'>
									{quizType.quizz.map((quiz, i) => {
										return (
											<div key={i} className='card me-2 mb-2' style={{ width: '18rem' }}>
												<div className='card-body'>
													<h5 className='card-title'>{quiz.title}</h5>
													<p className='card-text'>{quiz.type}</p>
													<Link className='btn btn-primary' to={`/quizTest/${x}/${i}`}>
														Start quiz
													</Link>
												</div>
											</div>
										)
									})}
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Quiz
