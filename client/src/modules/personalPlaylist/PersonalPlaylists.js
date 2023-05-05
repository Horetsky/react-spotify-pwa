import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useHttp from '../../utils/useHttps'
import { fetchPersonalPlaylist } from './helpers/thunk';

import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/routes';

import img0 from './assets/01img.png';
import img1 from './assets/02img.png';
import img2 from './assets/03img.png';
import img4 from './assets/05img.png';
import img3 from './assets/04img.png';

import './style.scss';

const PersonalPlaylists = () => {
    const {getRequest} = useHttp();
    const dispatch = useDispatch() ;
    const { reload } = useSelector(state => state.personalPlaylistSlice)
    useEffect(() => {
        if (!reload) return;
        dispatch(fetchPersonalPlaylist(getRequest));
        console.log('person playlist fetch');
    }, [dispatch, reload])

    const {
        personalPlaylist
    } = useSelector(state => state.personalPlaylistSlice)

    return (
        <section className='listen-recenty'>
            <div className='section-name'>
                <h1>Рекомендовані плейлісти</h1>
                    <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.04746 0.668317C1.81612 0.443894 1.40485 0.443894 1.17351 0.668317C0.942165 0.892739 0.942165 1.29171 1.17351 1.51613L8.88485 8.99688L1.17351 16.4776C0.942165 16.7021 0.942165 17.101 1.17351 17.3254C1.30203 17.4501 1.45625 17.5 1.61048 17.5C1.76471 17.5 1.91894 17.4501 2.04746 17.3254L10.1701 9.42079C10.2729 9.29611 10.35 9.1465 10.35 8.99688C10.35 8.84727 10.2729 8.69765 10.1701 8.57297L2.04746 0.668317Z" fill="#201F20" stroke="black"/>
                    </svg>
            </div>
            <div className='slider-container slider-small'>
                {
                    personalPlaylist.map((item, i) => (
                        <Playlist 
                            id={item.id}
                            name={item.name}
                            img={i}
                        />
                    ))
                }
            </div>
        </section>
    );
};

const Playlist = ({id, img, name}) => {
    const thumbnail = [img4, img0, img1, img2, img4, img1, img2, img1, img1, img3, img4, img3, img4];
    return (
        <Link to={ROUTES.singlePlaylist(id)}>
            <div className="card-wrapper">
                <div className="playlist-card">
                    <div className="small-cover">
                        <img src={thumbnail[img]} alt="album cover"/>
                    </div>
                    <div className='playlist-card__text'>
                        <div className='text__logo'>Music</div>
                        <div className='text__content'>
                            <h1>{name}</h1>
                            <h3>Мікс</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default PersonalPlaylists;