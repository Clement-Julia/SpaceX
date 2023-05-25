import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const Membre = () => {
	const { id } = useParams()
	const [member, setMember] = useState(null)

	useEffect(() => {
		fetchMember()
	}, [])

	const fetchMember = async () => {
		try {
			const response = await axios.get(`https://api.spacexdata.com/v4/crew/${id}`)
			setMember(response.data)
		} catch (error) {
			console.error(error)
		}
	}

	if (!member) {
		return <div>Loading member data...</div>
	}

	return (
		<>
			<div>
				<h2>{member.name}</h2>
				<img src={member.image} alt={member.name} style={{ width: '200px', height: 'auto' }} />
				<p>Agency: {member.agency}</p>
                <p>Status: {member.status}</p>
                <a href={member.wikipedia}>wikipedia page</a>
			</div>
			<Link to={'/crew'}>
				<button>return to crew</button>
			</Link>
		</>
	)
}

export default Membre
