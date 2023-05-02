import { configureStore } from '@reduxjs/toolkit';
import { general } from './reducers/_general'
import { user } from './reducers/user';

import { 
  recommendationSlice, 
  listenMoreSlice,
  moreFromArtistSlice,
  personalPlaylistSlice,
  favArtistSlice,
  
  singleHeaderSlice,

  singleTrackSlice,
  singleArtistSlice
} from '../modules'


// import { player } from './reducers/player';

// import { listenPage } from './reducers/listenPage';
// import { searchPage } from './reducers/searchPage';
// import { libPage } from './reducers/libPage';

// import { singleAlbum } from './reducers/singleAlbum';
// import { singleTrack } from './reducers/singleTrack';
// import { singleArtist } from './reducers/singleArtist';

export const store = configureStore({
  reducer: {
    general,
    user,
    
    recommendationSlice,
    listenMoreSlice,
    moreFromArtistSlice,
    personalPlaylistSlice,
    favArtistSlice,

    singleHeaderSlice,
    
    singleTrackSlice,
    singleArtistSlice
    // player,

    // listenPage,
    // searchPage,
    // libPage,

    // singleAlbum,
    // singleTrack,
    // singleArtist
  }
})