import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../router/routes';

import './musicCard.scss';

const MusicCard = ({id, name, artist, thumbnail, type, addControl}) => {
    const {pathname} = useLocation()
    return (
        <Link to={
            type === 'track' ? ROUTES.singleTrack(id) : 
            type === 'album' ? ROUTES.singleAlbum(id) : 
            type === 'playlist' && !id ? ROUTES.autoPlaylist(addControl) : 
            type === 'playlist' ? ROUTES.singlePlaylist(id) : null
        }>
            <div className="card-wrapper">

                <div className="small-card">
                    <div
                        className={pathname.split("/")[2] === 'library' ? `small-cover lib-page-small-cover` : 'small-cover'}
                    >
                        <img src={thumbnail} alt="album cover"/>
                    </div>
                    <div className="small-card__text">
                        <p className='type'>{type ? `${type.toUpperCase()}` : null}</p>
                        <h1 className="small-name">{name}</h1>
                        <div className='music-card-artists'>

                            {
                                artist?.map((item, i) => (
                                    <Link to={item.id ? ROUTES.singleArtist(item.id) : null} key={item.id ? item.id : i}>
                                        <p className="small-artist">{item.name}</p>
                                    </Link>
                                ))
                            }

                        </div>
                    </div>
                </div>

            </div>
        </Link> 
    )
}

export default MusicCard