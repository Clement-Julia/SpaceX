import React from 'react';
import { Link } from 'react-router-dom';

const ElementListEquipage = ({ data }) => {
  return (
    <div  className='col-3'>
    <Link to={`/crew/${data.id}`}>
        <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={data.image}
        alt={data.name}/>
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
