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

import SingleHeader from "./singleHeader/SingleHeader";
import { singleHeaderSlice } from "./singleHeader/helpers/reducer";

import SingleTrackView from "./singleTrackView/SingleTrackView";
import { singleTrackSlice } from "./singleTrackView/helpers/reducer";
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

    SingleHeader,
    singleHeaderSlice,

    SingleTrackView,
    singleTrackSlice
}