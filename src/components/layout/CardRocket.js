import { Link } from "react-router-dom";

const CardRocket = ({rocket}) => {

    return (
        <div key={rocket.id} className='col-3'>
            <div className='card' style={{ width: '18rem' }}>
                <img src={rocket.flickr_images[0]} className='card-img-top' alt={rocket.name} />
                <div className='card-body'>
                    <h5 className='card-title'>{rocket.name}</h5>
                    <p className='card-text d-flex flex-column'>
                        <span>Hauteur : {rocket.height.meters}</span>
                        <span>Diamètre : {rocket.diameter.meters}</span>
                        <span>Masse : {rocket.mass.kg}</span>
                    </p>
                    <Link className='btn btn-primary' to={{ pathname: `/rocket/${rocket.id}` }}>
                        Voir plus
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default CardRocket;