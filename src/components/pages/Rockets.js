import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CardRocket from '../layout/CardRocket'
import Rocket from '../layout/Rocket'

const Rockets = () => {
	const [data, setData] = useState([])
	const { id = '' } = useParams()
	// const lang = localStorage.getItem('degree');

	useEffect(() => {
		fetchData()
	}, [id])

	const fetchData = async () => {
		try {
			var url = `https://api.spacexdata.com/v4/rockets/${id}`
			const response = await axios.get(url)
			setData(response.data)
		} catch (error) {
			// toast.error(`Une erreur s'est produite : ${error.message}`)
			console.log('error')
		}
	}

	return (
		<div className='container mt-3'>
			{Array.isArray(data) ? (
				<div className='row justify-content-center'>
					{data.map((rocket) => {
						return <CardRocket key={rocket.id} rocket={rocket}></CardRocket>
					})}
				</div>
			) : (
				<>
					<Link className='btn btn-primary mb-3' to={{ pathname: '/rockets' }}>
						Retour
					</Link>
					<Rocket data={data} />
				</>
			)}
		</div>
	)
}

export default Rockets
