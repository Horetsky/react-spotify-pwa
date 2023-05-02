import { useSelector } from 'react-redux';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import SingleHeader from '../singleHeader/SingleHeader';
import Navbar from "../../components/navbar/Navbar";
import './style.scss';

const SingleItem = () => {
    const   location = useLocation().pathname.split('/')[1],
            { activePage } = useSelector(state => state.general),
            { itemId } = useParams(),
            {solidColor} = useSelector(state => state.general);
    return (
        <div className='single-container'>
            <div className="container-solid" style={{"background": `${solidColor}`}}></div>
            <div className='single-item-content'>
                <SingleHeader type={location} id={itemId} />
                <Outlet />
                <Navbar activePage={activePage}/>
            </div>
        </div>
    );
};

export default SingleItem;