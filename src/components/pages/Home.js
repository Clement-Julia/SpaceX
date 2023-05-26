import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import ReactLoading from 'react-loading'
import '../../assets/style/components/Home.css'
import '../../assets/style/components/test.css'

const Home = () => {
	const [data, setData] = useState([])
	const [dataPad, setDataPad] = useState([])
	const [dataRockets, setDataRockets] = useState([])

	useEffect(() => {
		fetchData()
		fetchLaunchData()
		fetchRocketsData()
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

	const fetchLaunchData = async () => {
		try {
			var url = 'https://api.spacexdata.com/v4/launchpads'
			const response = await axios.get(url)
			setDataPad(response.data)
		} catch (error) {
			toast.error(`Une erreur s'est produite : ${error.message}`)
		}
	}

	const fetchRocketsData = async () => {
		try {
			var url = 'https://api.spacexdata.com/v4/rockets'
			const response = await axios.get(url)
			setDataRockets(response.data)
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

	let rockets = Object.entries(dataRockets).reduce((acc, [key, value]) => {
		if (!acc[value.id]) {
			acc[value.id] = []
		}
		acc[value.id] = value
		return acc
	}, {})

	let nowY = new Date().getFullYear()

	return data.name && Object.keys(user).length && Object.keys(rockets).length ? (
		<>
			<section className='section-block launcher-background'>
				<div className='d-flex align-items-center flex-column h-100 text-white launcher'>
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
							{data.founded} - {nowY}, {data.headquarters.address}, {data.headquarters.city}, {data.headquarters.state}
						</span>
					</div>
				</div>
			</section>
			<section className='section-block'>
				<div className='row me-0'>
					{dataPad.map((pad, i) => {
						return (
							<div key={i} className='col-md-4 col-6 px-0 h-50'>
								<figure className='snipParent cursor'>
									<img className='basic-img' src={pad.images.large} alt={pad.name} style={{ width: '100%', height: '100%' }} />
									<figcaption>
										<div className='row mb-4'>
											{pad.rockets.map((rocket, i) => {
												return (
													<div key={i} className='col-4'>
														<Link to={`/rocket/${rocket}`}>
															<figure className='snipChildren cursor rounded'>
																<img className='basic-img snp-img' src={rockets[rocket].flickr_images[0]} alt={rockets[rocket].name} style={{ width: '100%', height: '100%' }} />
																<figcaption>
																	<h3 className='Childh3'>{rockets[rocket].name}</h3>
																	<h4 className='Childh4'>Rockets</h4>
																</figcaption>
															</figure>
														</Link>
													</div>
												)
											})}
										</div>

										<h3 className='Parenth3'>{pad.name}</h3>
										<h4 className='Parenth4'>Launcher</h4>
									</figcaption>
								</figure>
							</div>
						)
					})}
				</div>
			</section>
			<section className='section-block'>
				{/* <h1>CEO & CTO & cto_propulsion & coo</h1> */}
				<div className='row me-0'>
					{Object.keys(user).map((key) => (
						<div key={key} className='col-md-4 col-6 px-0'>
							<figure className='snipParent cursor'>
								<img src={require(`../../assets/img/${key.replace(/\s/g, '')}.jpg`)} alt={key} style={{ width: '100%', height: '100%' }} />
								<figcaption>
									<h3>{key}</h3>
									{user[key].map((profession, i) => {
										return <h4 key={i}>{profession}</h4>
									})}
								</figcaption>
							</figure>
						</div>
					))}
				</div>
			</section>
		</>
	) : (
		<section className='d-flex justify-content-center'>
			<ReactLoading type='spokes' color='black' className='pt-15' />
		</section>
	)
}

export default Home
