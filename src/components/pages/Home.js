import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import ReactLoading from 'react-loading'

const Home = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		try {
			var url = 'https://api.spacexdata.com/v4/company'
			const response = await axios.get(url)
			setData(response.data)
		} catch (error) {
			toast.error(`Une erreur s'est produite : ${error.message}`)
		}
	}

	let user = {
		founder: data.founder,
		ceo: data.ceo,
		cto: data.cto,
		cto_propulsion: data.cto_propulsion,
		coo: data.coo,
	}

	user = Object.entries(user).reduce((acc, [key, value]) => {
		if (!acc[value]) {
			acc[value] = []
		}
		acc[value].push(key)
		return acc
	}, {})

	return (
		data.name ? (
			<>
				<section className='launcher'>
					<div className='d-flex align-items-center flex-column blur h-100 text-white'>
						<h1 className='spaceX title'>SpaceX</h1>
						<div>
							<Link className='text-white' to={data.links.website} title='Site web officiel' target='_blank'>
								<i className='fa-solid fa-globe fa-lg mx-2'></i>
							</Link>
							<Link className='text-white' to={data.links.flickr} title='Flickr' target='_blank'>
								<i className='fa-solid fa-image fa-lg mx-2'></i>
							</Link>
							<Link className='text-white' to={data.links.twitter} title='Twitter' target='_blank'>
								<i className='fa-brands fa-twitter fa-lg mx-2'></i>
							</Link>
							<Link className='text-white' to={data.links.elon_twitter} title="Twitter d'Elon" target='_blank'>
								<i className='fa-solid fa-hashtag fa-lg mx-2'></i>
							</Link>
						</div>
						<div className='d-flex flex-column px-15 pt-5'>
							<span className='pb-5'>{data.summary}</span>
							<span>Nombre d'employé : {data.employees}</span>
							<span>Valeur marchande : {data.valuation}$</span>
						</div>
						<div className='footer-address'>
							<span>
								Adresse : {data.headquarters.address}, {data.headquarters.city}, {data.headquarters.state}
							</span>
						</div>
					</div>
				</section>
				<section>
					<h1>Sites & Fusées</h1>
				</section>
				<section>
					<h1>CEO & CTO</h1>
				</section>
				<section>
					<h1>cto_propulsion & coo</h1>
				</section>
			</>
		) : (
			<section className='d-flex justify-content-center'>
				<ReactLoading type='spokes' color='black' className='pt-15' />
			</section>
		)
	)
}

export default Home