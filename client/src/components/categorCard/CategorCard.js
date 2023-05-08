import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/routes';

import './categorCard.scss';
const CategorCard = ({ id, name, icon }) => {
    return (
        // <Link to={ROUTES.smartDiscover(id)}>
            <div className='cat-item'>
                <img src={icon}/>
                <h1>{name}</h1>
            </div>
        // </Link>
    );
};

export default CategorCard;