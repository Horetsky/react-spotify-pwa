import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useHttp from '../../utils/useHttps'
import { fetchmoreFromArtist } from './helpers/thunk';
import MusicCardSlider from "../../components/musicCardSlider/MusicCardSlider";

const MoreFromArtist = () => {
    const {getRequest} = useHttp();
    const dispatch = useDispatch() ;
    
    useEffect(() => {
        dispatch(fetchmoreFromArtist(getRequest))
    }, [])

    const {
        listenMore
    } = useSelector(state => state.listenMoreSlice)

    return (
        <section className='listen-recenty'>
            {
                listenMore.length > 0 
                ? 
                <MusicCardSlider data={listenMore} type="track" lable="Більше від улюбленого виконавця"/>
                :   <h1>Нажаль у вас немає недавніх треків</h1>

            }
        </section>
    );
};

export default MoreFromArtist;