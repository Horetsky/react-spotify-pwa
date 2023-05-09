import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes';
import PrivateRoute from '../pages/PrivateRoute';

import Dashboard from '../modules/Dashboard/Dashboard';
import SingleItem from '../modules/SingleItem/SingleItem';

import {
    ListenNowPage,
    SearchPage,
    LibPage,
    
    SingleTrackPage,
    SingleArtistPage,
    SinglePlaylistPage,
    SingleAlbumPage
} from '../pages/_index'
export const AppRouterProvider = createBrowserRouter([
    {
        path: ROUTES.app,
        element: <PrivateRoute>    
                    <Dashboard />
                 </PrivateRoute>,
        children: [
            {
                index: true,
                element: <ListenNowPage />
            },
            {
                path: ROUTES.search,
                element: <SearchPage />
            },
            {
                path: ROUTES.library,
                element: <LibPage />
            }
        ]
    },

    {
        path: ROUTES.singleTrack(),
        element: <PrivateRoute>
                    <SingleItem />
                </PrivateRoute>,
        children: [
            {
                index: true,
                element: <SingleTrackPage />
            }
        ]
    },
    {
        path: ROUTES.singleArtist(),
        element: <PrivateRoute>
                    <SingleItem />
                </PrivateRoute>,
        children: [
            {
                index: true,
                element: <SingleArtistPage />
            }
        ]
    },
    {
        path: ROUTES.singlePlaylist(),
        element: <PrivateRoute>
                    <SingleItem />
                </PrivateRoute>,
        children: [
            {
                index: true,
                element: <SinglePlaylistPage />
            }
        ]
    },
    {
        path: ROUTES.singleAlbum(),
        element: <PrivateRoute>
                    <SingleItem />
                </PrivateRoute>,
        children: [
            {
                index: true,
                element: <SingleAlbumPage />
            }
        ]
    },
    {
        path: ROUTES.autoPlaylist(),
        element: <PrivateRoute>
                    <SingleItem />
                </PrivateRoute>,
        children: [
            {
                index: true,
                element: <SinglePlaylistPage />
            }
        ]
    }

])