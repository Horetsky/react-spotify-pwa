import { useParams } from "react-router-dom";
import { SingleArtistView } from "../../modules";

import './style.scss';

const SingleArtistPage = () => {
    const { itemId } = useParams()
    return (
        <div className='single-track single-artist'>
            <SingleArtistView id={itemId}/>
        </div>
    );
};

export default SingleArtistPage;