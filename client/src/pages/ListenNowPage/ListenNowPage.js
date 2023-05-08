import { 
    Recommendation,
    ListenMore,
    MoreFromArtist,
    PersonalPlaylists,
    RecommendArtists
} from "../../modules";
import CurrentDate from "../../components/currentDate/CurrentDate";

import './style.scss'

const ListenNowPage = () => {
    return (
        <div className='page-container'>
            <CurrentDate />
            <Recommendation />
            <ListenMore />
            <MoreFromArtist />
            <PersonalPlaylists/>
            <RecommendArtists />
        </div>
    );
};

export default ListenNowPage;