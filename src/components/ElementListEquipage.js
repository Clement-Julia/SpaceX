import React from 'react';
import { Link } from 'react-router-dom';

const ElementListEquipage = ({ data }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <Link to={`/crew/${data.id}`} className="text-decoration-none">
        <div className="card">
          <img className="card-img-top" src={data.image} alt={data.name} style={{ height: '280px', objectFit: 'cover' }} />
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">Agency: {data.agency}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ElementListEquipage;
