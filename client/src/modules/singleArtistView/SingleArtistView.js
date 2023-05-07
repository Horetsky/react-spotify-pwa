import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "../../utils/useHttps";

import { fetchSingleArtist } from './helpers/thunk';

import MusicCardSlider from "../../components/musicCardSlider/MusicCardSlider";
import ArtistCardSlider from "../../components/artistCardSlider/ArtistCardSlider";
import MusicCardSkeleton from "../../components/musicCardSkeleton/MusicCardSkeleton";
import VideoSkeleton from '../../components/videoSkeleton/VideoSkeleton';

const SingleArtistView = ({ id }) => {
    const { getRequest, rapidRequest } = useHttp();
    const dispatch = useDispatch();
    const { loadingStatus } = useSelector(state => state.singleArtistSlice);

    useEffect(() => {
        dispatch(fetchSingleArtist(getRequest, rapidRequest, id))
    }, [id])

    const { baseData } = useSelector(state => state.singleHeaderSlice);
    const {
        topTracks,
        newRelease,
        albums,
        videoUrl,
        relatedArtists 
    } = useSelector(state => state.singleArtistSlice);

    return (
        <>
            <section className='related-tracks'>
                {
                    loadingStatus === 'loading' ? <MusicCardSkeleton /> :
                    <MusicCardSlider data={topTracks} type="track" lable="Популярні треки"/>
                }
            </section>

            <section className='artist-albums'>
                <div className='artist-albums__new-release'>
                {
                    loadingStatus === 'loading' ? <MusicCardSkeleton /> :
                    <MusicCardSlider data={newRelease} type="album" lable="Нові релізи"/>   
                }
                </div>
                <div className='artist-albums__albums'>
                {
                    loadingStatus === 'loading' ? <MusicCardSkeleton /> :
                    <MusicCardSlider data={albums} lable="Альбоми виконавця" type="album"/> 
                }
                </div>
            </section>

            <section className='atrists-clips'>
                {
                    loadingStatus === 'loading' ? <VideoSkeleton /> :
                    <Video url={videoUrl} lable={baseData.name}/>
                }
            </section>

            <section className='related-to-single-artist'>
                <ArtistCardSlider data={relatedArtists} type="track" lable="Знайди схожих виконавців"/>
            </section>
        </>
    );
};

const Video = ({url, lable}) => {
    return (
        <div className='artist-video-container'>
            <div className='video-section-caption'>
                <h3>ВІДЕОПІДБІРКА</h3>
                <h1>{lable}: попоулярні відеокліпи</h1>
            </div>

            <iframe
                className='artist-page-video-clip'
              src={url}
              title="Youtube Player"
              allowFullScreen
            />

        </div> 
    )
}

export default SingleArtistView;