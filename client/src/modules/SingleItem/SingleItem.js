import { useSelector } from 'react-redux';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import SingleHeader from '../singleHeader/SingleHeader';
import Navbar from "../../components/navbar/Navbar";
import HeaderColorSkeleton from '../../components/headerSkaleton/HeaderColorSkeleton';

import './style.scss';

const SingleItem = () => {
    const   location = useLocation().pathname.split('/')[1],
            { activePage } = useSelector(state => state.general),
            { itemId } = useParams();

    const { solidColor } = useSelector(state => state.general);
    const { loadingStatus } = useSelector(state => state.singleHeaderSlice)

    return (
        <div className='single-container'>
            {
                loadingStatus === 'loading' ? <HeaderColorSkeleton /> :
                <div className="container-solid" style={{"background": `${solidColor}`}}></div>
            }
            <div className='single-item-content'>
                <SingleHeader type={location} id={itemId} loadingStatus={loadingStatus}/>
                <Outlet />
                <Navbar activePage={activePage}/>
            </div>
        </div>
    );
};

export default SingleItem;