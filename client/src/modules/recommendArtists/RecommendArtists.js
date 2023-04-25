import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useHttp from '../../utils/useHttps'
import { fetchArtistMore } from './helpers/thunk';
import ArtistCardSlider from '../../components/artistCardSlider/ArtistCardSlider';

const RecommendArtists = () => {
    const {getRequest} = useHttp();
    const dispatch = useDispatch() ;
    
    useEffect(() => {
        dispatch(fetchArtistMore(getRequest))
    }, [])
    const {
        favArtist
    } = useSelector(state => state.favArtistSlice)
    return (
        <section className='artist-more'>
            {
                favArtist.length > 0 
                ? 
                <ArtistCardSlider data={favArtist} type="track" lable="Улюблені артисти"/>
                :   <h1>Нажаль у вас немає недавніх треків</h1>
            }
        </section>
    );
};

export default RecommendArtists;