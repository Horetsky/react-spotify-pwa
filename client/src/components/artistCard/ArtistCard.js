
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../router/routes';

import './artistCard.scss';

const ArtistCard = ({id, name, thumbnail}) => {
    return (
        <NavLink to={ROUTES.singleArtist(id)}>

            <div className="card-wrapper">
                <div className="small-card artist-card">
                    <div className="small-cover artist-cover">
                        <img src={thumbnail} alt="album cover"/>
                    </div>
                    <div className="small-card__text artist-name">
                        <h1 className="small-name">{name}</h1>
                    </div>
                </div>
            </div>

        </NavLink>

    )
}
export default ArtistCard