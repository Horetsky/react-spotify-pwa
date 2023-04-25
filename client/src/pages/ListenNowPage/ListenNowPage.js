import { 
    Recommendation,
    ListenMore,
    MoreFromArtist,
    PersonalPlaylists,
    RecommendArtists
} from "../../modules";
import CurrentDate from "../../components/currentDate/CurrentDate";
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