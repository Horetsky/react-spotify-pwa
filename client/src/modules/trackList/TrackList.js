import { useRef } from 'react';
import { useSelector } from 'react-redux';
import AlbumItem from '../../components/albumItem/AlbumItem'

const TrackList = ({ type }) => {
    const windowWidth = useRef(window.innerWidth);

    const {
        baseData,
        track
    } = useSelector(state => state.singleHeaderSlice)
    return (
        <>
            <section className="track-list">

                <ul className="track-list-items">
                    {
                        track?.map((item, i) => (
                            <AlbumItem 
                                key={item.id}
                                id={item.id}
                                num={i+1}
                                name={item.name}
                                thumbnail={
                                    type === 'playlist' || type === 'library' ? 
                                    item.thumbnail : baseData.thumbnail
                                }
                                artist={windowWidth.current < 550 ? [item.artist[0]] : item.artist}
                                audio={item.audio}
                            />
                        ))
                    }
                </ul>

            </section>

            {
                baseData.copyrights ? 
                <>
                <section className="rights">
                    <div className="copy-rights">
                        {
                            baseData.copyrights.map((item, i) => (
                                <span key={i}>{item.text}{i % 2 === 0 ? ' | ' : null}</span>
                            ))
                        }
                    </div>
                    <p>{baseData.date} рік</p>
                </section>
                </> : null
            }
        </>
    )
}

export default TrackList;