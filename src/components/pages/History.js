import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import '../../assets/style/components/History.css'

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
			<div className='timeline'>
				{data.map((time) => {
					return(
						<>
							<div className='timeline-empty'></div>

							<div className='timeline-middle'>
								<div className='timeline-circle'></div>
							</div>
							<div className='timeline-component timeline-content'>
								<h3>HTML</h3>
								<p>Some Text</p>
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
