import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import '../../assets/style/components/History.css'

import { format } from 'date-fns'

const Rockets = () => {
	const [data, setData] = useState([])
	const { id = '' } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		fetchData()
	}, [id])

	const fetchData = async () => {
		try {
			var url = 'https://api.spacexdata.com/v4/history'
			const response = await axios.get(url)
			setData(response.data)
		} catch (error) {
			toast.error(`Un problème est survenue`)
		}
	}

	return (
		<section className='design-section pt-10'>
			<div className='timeline accordion accordion-flush id="accordionExample"'>
				{data.map((time) => {
					const linkArray = Object.values(time.links)
					return (
						<>
							<div className='timeline-empty'></div>

							<div className='timeline-middle'>
								<div className='timeline-circle'></div>
							</div>
							<div className='timeline-component timeline-content accordion-item'>
								<button
									className='accordion-button '
									type='button'
									data-bs-toggle='collapse'
									data-bs-target={`#${time.id}`}
									aria-expanded='true'
									aria-controls='collapseOne'
									style={{
										background: '#1f1f1f',
										color: 'white',
									}}
								>
									<div>
										<p className='timeline-date'><b>{format(new Date(time.event_date_utc), 'yyyy-MM-dd')}</b></p>
										<h3 className='accordion-header'>{time.title}</h3>
									</div>
								</button>
								<div id={time.id} className='accordion-collapse collapse show' aria-labelledby='headingOne' data-bs-parent='#accordionExample'>
									<div className='accordion-body'>
										<p>{time.details}</p>
										<div className='list-group list-group-horizontal'>
											{linkArray.map((link, index) => {
												if (link) {
													return (
														<a
															key={index}
															href={link}
															className='list-group-item list-group-item-action info-button'
															
														>
															Information {index + 1}
														</a>
													)
												}
											})}
										</div>
									</div>
								</div>
							</div>
						</>
					)
				})}
				{/* <div className='timeline-empty'></div>

				<div className='timeline-middle'>
					<div className='timeline-circle'></div>
				</div>
				<div className='timeline-component timeline-content'>
					<h3>HTML</h3>
					<p>Some Text</p>
				</div>
				<div className='timeline-component timeline-content'>
					<h3>CSS</h3>
					<p>Some Text.</p>
				</div>
				<div className='timeline-middle'>
					<div className='timeline-circle'></div>
				</div>
				<div className='timeline-empty'></div>

				<div className='timeline-empty'></div>

				<div className='timeline-middle'>
					<div className='timeline-circle'></div>
				</div>
				<div className=' timeline-component timeline-content'>
					<h3>Javascript</h3>
					<p>Some Text.</p>
				</div>
				<div className='timeline-component timeline-content'>
					<h3>CSS</h3>
					<p>Some Text.</p>
				</div> */}
			</div>
		</section>
	)
}

export default Rockets
