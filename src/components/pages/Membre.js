import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';

const Membre = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMember();
  }, []);

  const fetchMember = async () => {
    try {
      const response = await axios.get(`https://api.spacexdata.com/v4/crew/${id}`);
      setMember(response.data);
    } catch (error) {
      toast.error(`An error has occurred : Unknown Crew Member`);
      navigate('/crew');
    }
  };

  if (!member) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
        <ReactLoading type="spokes" color="black" />
      </div>
    );
  }

  const badgeClass = member.status === 'active' ? 'badge bg-success rounded-circle' : 'badge bg-danger rounded-circle';

  return (
    <div className="container mt-10">
      <div className="row justify-content-center mt-4">
        <div className="col-md-6 text-center">
          <h2>
            {member.name}
            <span className={badgeClass} style={{ marginLeft: '10px', width: '10px', height: '10px', padding: '6px' }}>
              <span className='visually-hidden'>active</span>
            </span>
          </h2>
          <img src={member.image} alt={member.name} style={{ width: '200px', height: 'auto' }} className="img-fluid mb-3" />
          <p>
            <strong>Agency:</strong> {member.agency}
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
  );
};

export default Membre;
