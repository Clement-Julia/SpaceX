import { Link } from 'react-router-dom'
import '../../assets/style/components/Navigation.css'

export default function Navigation() {
	return (
		<>
			<nav id='navResponsive' className='navbar navbar-expand-md navbar-dark bg-dark d-none'>
				<div className='container-fluid'>
					<Link className='navbar-brand' to='/'>
						SpaceX
					</Link>
					<button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<Link className='nav-link' to='/history'>
								History
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/crew'>
									Crew
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/rockets'>
									Rockets
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/quiz'>
									Quiz
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<nav className='navMenu'>
				<Link to='/'>Home</Link>
				<Link to='/history'>History</Link>
				<Link to='/crew'>Crew</Link>
				<Link to='/rockets'>Rockets</Link>
				<Link to='/quiz'>Quiz</Link>
				<div className='dot'></div>
			</nav>
		</>
	)
}
