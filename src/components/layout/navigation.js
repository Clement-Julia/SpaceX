import { Link } from 'react-router-dom'

export default function Navigation() {
	return (
		<nav id="navParent" className='navbar navbar-expand-md navbar-dark bg-dark'>
			<div className='container-fluid'>
				<button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<Link className='nav-link' to='/'>
								Accueil
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='searchForm/batman'>
								SearchForm
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
