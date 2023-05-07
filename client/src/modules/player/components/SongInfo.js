import { useMemo, useRef } from 'react';

import '../style.scss'

const SongInfo = ({ name, thumbnail, artist}) => {
    const windowWidth = useRef(window.innerWidth);
    return (
        <div className="song-info-wrapper">
            <div className="song-info-cover">
                <img src={thumbnail}/>
            </div>

            <div className="the-info">
                <span>ЗАРАЗ ВІДТВОРЮЄТЬСЯ</span>
                <h1>{name}</h1>
                <div className='payer-artist'>
                    {
                        artist?.map(item => (
                                <h3 key={item.id}>{item.name}</h3>
                            )
                        )           
                    }
                </div>
            </div>
        </div>
    )
}

export default SongInfo