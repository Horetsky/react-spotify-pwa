import { NavLink } from 'react-router-dom';
import { ROUTES } from './../../utils/router/routes';

import './searchItem.scss'

const SearchItem = ({id, name, artist, artistId, thumbnail}) => {
    return (
        <NavLink to={ROUTES.singleTrack(id)}>
            <div className='search-item-wrapper'>
                <div className='item-data'>
                    <div className='search-item-cover'>
                        <img src={thumbnail} alt='album cover' />
                    </div>
                    <div className='search-item-text'>
                        <h1>{name}</h1>
                        <NavLink to={ROUTES.singleArtist(artistId)}>
                            <h4>{artist}</h4>
                        </NavLink>
                    </div>
                </div>
                <svg className='go-to-str' width="19" height="36" viewBox="0 0 19 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.12852 0.356497C1.65842 -0.118751 0.82268 -0.118751 0.352577 0.356497C-0.117526 0.831744 -0.117526 1.67663 0.352577 2.15188L16.0227 17.9935L0.352577 33.835C-0.117526 34.3103 -0.117526 35.1552 0.352577 35.6304C0.613746 35.8945 0.927148 36.0001 1.24055 36.0001C1.55395 36.0001 1.86736 35.8945 2.12852 35.6304L18.6344 18.8912C18.8433 18.6271 19 18.3103 19 17.9935C19 17.6766 18.8433 17.3598 18.6344 17.0958L2.12852 0.356497Z" fill="#555454"/>
                </svg>
            </div>
        </NavLink>
    )
}

export default SearchItem