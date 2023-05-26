import { Link } from 'react-router-dom'
import '../../assets/style/components/Navigation.css'

export default function Navigation() {
	return (
		<nav className='navMenu'>
			<Link to='/'>
				Home
			</Link>
			<Link to='/history'>
				History
			</Link>
			<Link to='/crew'>
				Crew
			</Link>
			<Link to='/rockets'>
				Rockets
			</Link>
			<Link to='/quiz'>
				Quiz
			</Link>
			<div className='dot'></div>
		</nav>
	)
}
