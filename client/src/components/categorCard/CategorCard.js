import { ROUTES } from '../../utils/router/routes'
import { NavLink } from 'react-router-dom';

import './categorCard.scss';
const CategorCard = ({ id, name, icon }) => {
    return (
        <NavLink to={ROUTES.smartDiscover(id)}>
            <div className='cat-item'>
                <img src={icon}/>
                <h1>{name}</h1>
            </div>
        </NavLink>
    );
};

export default CategorCard;