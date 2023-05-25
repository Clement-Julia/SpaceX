import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import ReactLoading from 'react-loading'

const Membre = () => {
  const { id } = useParams()
  const [member, setMember] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchMember()
  }, [])

  const fetchMember = async () => {
    try {
      const response = await axios.get(`https://api.spacexdata.com/v4/crew/${id}`)
      setMember(response.data)
    } catch (error) {
      console.error(error)
      setError(true)
    }
  }

  if (!member && !error) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
        <ReactLoading type="spokes" color="black" />
      </div>
    )
  }

  if (!member && error) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
        <h2>The crew member doesn't exist. Please return to the crew page.</h2>
		
            <Link to="/crew" className="btn btn-secondary">
              Return to Crew
            </Link>
          
      </div>
    )
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-4">
        <div className="col-md-6 text-center">
          <h2>{member.name}</h2>
          <img src={member.image} alt={member.name} style={{ width: '200px', height: 'auto' }} className="img-fluid mb-3" />
          <p>
            <strong>Agency:</strong> {member.agency}
          </p>
          <p>
            <strong>Status:</strong> {member.status}
          </p>
          <div className="d-flex justify-content-center mb-2">
            <a href={member.wikipedia} className="btn btn-primary mr-2">
              Wikipedia Page
            </a>
          </div>
          <div className="d-flex justify-content-center">
            <Link to="/crew" className="btn btn-secondary">
              Return to Crew
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Membre
