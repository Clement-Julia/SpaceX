import { Link } from "react-router-dom"

const Rocket = ({data}) => {
	
	return (
		<div className='row flex-row'>
			<div className='d-flex flex-column pe-5 col-6'>
				<div id='carouselExampleDark' className='carousel slide'>
					<div className='carousel-indicators'>
						{data.flickr_images.map((url, i) => {
							return <button key={`btn-${i}`} type='button' data-bs-target='#carouselExampleDark' data-bs-slide-to={i} className='active' aria-current='true' aria-label={`Slide ${i}`}></button>
						})}
					</div>
					<div className='carousel-inner'>
						{data.flickr_images.map((url, i) => {
							return (
								<div key={`div-${i}`} className={`carousel-item ${i == 0 ? 'active' : null}`} data-bs-interval='10000'>
									<img src={url} className='d-block w-100' alt={data.name} style={{ width: '600px', height: '450px' }} />
								</div>
							)
						})}
					</div>
					<button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleDark' data-bs-slide='prev'>
						<span className='carousel-control-prev-icon' aria-hidden='true'></span>
						<span className='visually-hidden'>Previous</span>
					</button>
					<button className='carousel-control-next' type='button' data-bs-target='#carouselExampleDark' data-bs-slide='next'>
						<span className='carousel-control-next-icon' aria-hidden='true'></span>
						<span className='visually-hidden'>Next</span>
					</button>
				</div>
			</div>
			<div className='col-6'>
				<h1 className='mb-3'>
					{data.name}
					<Link className='fa-brands fa-wikipedia-w fa-2xs ms-3 text-muted text-decoration-none' to={data.wikipedia} target='_blank' title='Page wikipedia'></Link>
				</h1>
				<p>{data.description}</p>
				<div className='accordion' id='accordionExample'>
					<div className='accordion-item'>
						<h2 className='accordion-header'>
							<button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
								Informations générales
							</button>
						</h2>
						<div id='collapseOne' className='accordion-collapse collapse' data-bs-parent='#accordionExample'>
							<div className='accordion-body'>
								<p>Type : {data.type}</p>
								<p>Premier vol : {data.first_flight}</p>
								<p>Appartenant à : {data.company}</p>
								<p>Pays d'origin : {data.country}</p>
								<p>En activité : {data.active ? 'Oui' : 'Non'}</p>
								<p>Pourcentage de réussite : {data.success_rate_pct}%</p>
								<p>Coût par lancement : {data.cost_per_launch}$</p>
							</div>
						</div>
					</div>
					<div className='accordion-item'>
						<h2 className='accordion-header'>
							<button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>
								Moteur(s)
							</button>
						</h2>
						<div id='collapseTwo' className='accordion-collapse collapse' data-bs-parent='#accordionExample'>
							<div className='accordion-body'>
								<p>Nombre de moteurs : {data.engines.number}</p>
								<p>Type du moteur : {data.engines.type}</p>
								<p>Version du moteur : {data.engines.version}</p>
								<p>Disposition : {data.engines.layout}</p>
								<p>Propergol 1 : {data.engines.propellant_1}</p>
								<p>Propergol 2 : {data.engines.propellant_2}</p>
							</div>
						</div>
					</div>
					<div className='accordion-item'>
						<h2 className='accordion-header'>
							<button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseThree' aria-expanded='false' aria-controls='collapseThree'>
								Décollage / Atterrissage
							</button>
						</h2>
						<div id='collapseThree' className='accordion-collapse collapse' data-bs-parent='#accordionExample'>
							<div className='accordion-body mb-4'>
								<p>Nombre de boosters : {data.boosters}</p>
								<p>Nombre de jambe d'atterrissage : {data.landing_legs.number}</p>
								{data.landing_legs.number > 0 && <p>Matériaux des jambes : {data.landing_legs.number}</p>}
								<p>Poussé au poids : {data.engines.thrust_to_weight}</p>
								<p>Poussé à vide : {data.engines.thrust_vacuum.kN}</p>
								<p>Poussé du niveau de la mer : {data.engines.thrust_sea_level.kN}</p>
								<p>Impulsion spécifique (niveau de la mer) : {data.engines.isp.sea_level}</p>
								<p>Impulsion spécifique (vide) : {data.engines.isp.vacuum}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Rocket
