import { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../router/routes'
import { extractColors } from 'extract-colors'

import './recommendMusicCard.scss';

const RecommendMusicCard = ({id, name, artist, date, thumbnail, type, atribute}) => {
    const [baseColor, setColor] = useState('#fff');
    
    const options = {
        colorValidator : ( red ,  green ,  blue ,  alpha  =  255 )  =>  alpha  >  250 ,
        crossOrigin: "anonimus"
    }

    useEffect(() => {
        getColor()
    }, [])

    const getColor = () => {
        extractColors(thumbnail, options)
            .then(data => setColor(data[0].hex))
            .catch(console.error)
    }

    return (
        <NavLink 
            to={type === 'album' ? ROUTES.singleAlbum(id) : ROUTES.singlePlaylist(id)}
        >
            <div className="card-wrapper">

                <span className="type">{atribute}</span>

                <div className="music-card">
                    <div className="cover">
                        <img src={thumbnail} alt="album cover"/>
                        
                    </div>
                    <div className="card__text" style={{'background': `${baseColor}`}}>
                        <h1 className="music-name">{name} - {type}</h1>
                        <p className="artist">{artist}</p>
                        <p className="release">{date}</p>
                    </div>
                </div>

            </div>
        </NavLink>
    )
}



export default RecommendMusicCard