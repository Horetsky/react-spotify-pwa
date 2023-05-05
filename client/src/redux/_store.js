import { configureStore } from '@reduxjs/toolkit';
import { general } from './reducers/_general'
import { user } from './reducers/user';

import { 
  recommendationSlice, 
  listenMoreSlice,
  moreFromArtistSlice,
  personalPlaylistSlice,
  favArtistSlice,

  categoriesSlice,
  searchPanelSlice,

  libPlaylistsSlice,
  libAlbumsSlice,
  libArtistSlice,
  libTracksSlice,
  
  singleHeaderSlice,

  singleTrackSlice,
  singleArtistSlice
} from '../modules'

export const store = configureStore({
  reducer: {
    general,
    user,
    
    recommendationSlice,
    listenMoreSlice,
    moreFromArtistSlice,
    personalPlaylistSlice,
    favArtistSlice,

    categoriesSlice,
    searchPanelSlice,

    libPlaylistsSlice,
    libAlbumsSlice,
    libArtistSlice,
    libTracksSlice,

    singleHeaderSlice,
    
    singleTrackSlice,
    singleArtistSlice
  }
})