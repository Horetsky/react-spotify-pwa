import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
    SingleHeader,
    LibPlaylists,
    LibAlbums,
    LibArtist,
    LibTracks
} from "../../modules";
import MusicCard from "../../components/musicCard/MusicCard";
import LibFilters from "./LibFilters";

import likedCover from './assets/likedCover.svg'
import favTrack from './assets/favTrack.svg'
import favArtist from './assets/favArtist.svg'

import './style.scss'
const LibPage = () => {
    const [activeFilter, setActiveFilter] = useState(null)
    const type = useLocation().pathname.split('/')[1]
    const setLibFilter = (filter) => {
        setActiveFilter(filter)
    }
    return (
        <div className='page-container'>
            <SingleHeader type={type}/>
            <LibFilters func={setLibFilter}/>
            {
                !activeFilter ? <LibRecommend /> : null
            }

            {
                !activeFilter || activeFilter === 'playlist' ? <LibPlaylists /> : null
            }

            {
                !activeFilter || activeFilter === 'albums' ? <LibAlbums /> : null
            }
            
            {
                !activeFilter || activeFilter === 'artist' ? <LibArtist filter={activeFilter}/> : null
            }

            {
                activeFilter === 'track' ? <LibTracks /> : null
            }
            
        </div>
    );
};

const LibRecommend = () => {
    return (
        <section className='lib-recommend lib-smart-playlists'>

            <div className='slider-container lib-page-recommend'>
                <MusicCard 
                    key='122588'
                    name="Збережені треки"
                    artist={[{name: "Створено автоматично", id: null}]}

                    thumbnail={likedCover}
                    type="playlist"
                    addControl="saved"
                />
                <MusicCard 
                    key='12887588'
                    name="Улюблені треки"
                    artist={[{name: "Створено автоматично", id: null}]}

                    thumbnail={favTrack}
                    type="playlist"
                    addControl="liked"
                />
                <MusicCard 
                    key='12887138'
                    name="Улюблені виконавці"
                    artist={[{name: "Створено автоматично", id: null}]}

                    thumbnail={favArtist}
                    type="playlist"
                    addControl="artist"
                />
            </div>

        </section>
    )
}

export default LibPage;