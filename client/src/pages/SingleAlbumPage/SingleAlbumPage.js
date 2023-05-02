import { useLocation } from "react-router-dom";
import { TrackList } from "../../modules";

import './style.scss'
const SingleAlbumPage = () => {
    const location = useLocation().pathname.split('/')[1];
    return (
        <div className="single-track">
            <TrackList type={location}/>
        </div>
    );
};

export default SingleAlbumPage;