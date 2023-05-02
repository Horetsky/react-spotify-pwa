import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes';
import PrivateRoute from '../pages/PrivateRoute';
// import PrivateRoute from '../../components/_HOCs/PrivateRoute';
// import Dashboard from '../../pages/_layouts/Dashboard';
import Dashboard from '../modules/Dashboard/Dashboard';
import SingleItem from '../modules/SingleItem/SingleItem';
// import LibPageFilters from '../../pages/_layouts/LibPageFilters';
// import SingleItem from '../../pages/_layouts/SingleItem';
import {
    LoginPage,
    ListenNowPage,
    SearchPage,
    
    SingleTrackPage
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
            // {
            //     path: ROUTES.library,
            //     element: <LibraryPage />,
            //     children: [
            //         {
            //             path: ROUTES.singleFilter(),
            //             element: <LibPageFilters />
            //         }
            //     ]
            // },
        ]
    },

    // {
    //     path: ROUTES.singleAlbum(),
    //     element: <SingleItem />,
    //     children: [
    //         {
    //             index: true,
    //             element: <SingleAlbumPage />
    //         },
    //     ]
    // },

    // {
    //     path: ROUTES.singlePlaylist(),
    //     element: <SingleItem />,
    //     children: [
    //         {
    //             index: true,
    //             element: <SinglePlaylistPage />
    //         }
    //     ]
    // },

    {
        path: ROUTES.singleTrack(),
        element: <SingleItem />,
        children: [
            {
                index: true,
                element: <SingleTrackPage />
            }
        ]
    },

    // {
    //     path: ROUTES.singleArtist(),
    //     element: <SingleItem />,
    //     children: [
    //         {
    //             index: true,
    //             element: <SingleArtistPage />
    //         }
    //     ]
    // },

    // {
    //     path: ROUTES.autoPlaylist(),
    //     element: <SingleItem />,
    //     children: [
    //         {
    //             index: true,
    //             element: <SmartListPage />
    //         }
    //     ]
    // }

])