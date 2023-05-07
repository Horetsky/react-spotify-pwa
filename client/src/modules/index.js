import LoginForm from "./loginForm/LoginForm";
import Recommendation from "./recommendation/Recommendation";
import { recommendationSlice } from "./recommendation/helpers/reducer";

import ListenMore from "./listenMore/ListenMore";
import { listenMoreSlice } from "./listenMore/helpers/reducer";

import MoreFromArtist from "./moreFromArtist/MoreFromArtist";
import { moreFromArtistSlice } from "./moreFromArtist/helpers/reducer";

import PersonalPlaylists from "./personalPlaylist/PersonalPlaylists";
import { personalPlaylistSlice } from "./personalPlaylist/helpers/reducer";

import RecommendArtists from "./recommendArtists/RecommendArtists";
import { favArtistSlice } from "./recommendArtists/helpers/reducer";

import Categories from "./categories/Categories";
import { categoriesSlice } from "./categories/helpers/reducer";
import SearchPannel from "./searchPannel/SearchPannel";
import { searchPanelSlice } from "./searchPannel/helpers/reducer";

import LibPlaylists from "./libPlaylists/LibPlaylists";
import { libPlaylistsSlice } from "./libPlaylists/helpers/reducer";
import LibAlbums from "./libAlbums/LibAlbums"
import { libAlbumsSlice } from "./libAlbums/helpers/reducer";
import LibArtist from "./libArtists/LibArtist";
import { libArtistSlice } from "./libArtists/helpers/reducer";
import LibTracks from "./libTracks/LibTracks";
import { libTracksSlice } from "./libTracks/helpers/reducer";

import SingleHeader from "./singleHeader/SingleHeader";
import { singleHeaderSlice } from "./singleHeader/helpers/reducer";

import SingleTrackView from "./singleTrackView/SingleTrackView";
import { singleTrackSlice } from "./singleTrackView/helpers/reducer";

import SingleArtistView from "./singleArtistView/SingleArtistView";
import { singleArtistSlice } from "./singleArtistView/helpers/reducer";

import TrackList from "./trackList/TrackList";

import Player from "./player/Player";
import { playerSlice } from "./player/helpers/reducer";

export {
    LoginForm,

    Recommendation,
    recommendationSlice,

    ListenMore,
    listenMoreSlice,

    MoreFromArtist,
    moreFromArtistSlice,

    PersonalPlaylists,
    personalPlaylistSlice,

    RecommendArtists,
    favArtistSlice,

    Categories,
    categoriesSlice,
    SearchPannel,
    searchPanelSlice,

    LibPlaylists,
    libPlaylistsSlice,
    LibAlbums,
    libAlbumsSlice,
    LibArtist,
    libArtistSlice,
    LibTracks,
    libTracksSlice,

    SingleHeader,
    singleHeaderSlice,

    SingleTrackView,
    singleTrackSlice,

    SingleArtistView,
    singleArtistSlice,
    
    TrackList,
    
    Player,
    playerSlice
}