import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

import userIcon from './assets/user.png'
import './style.scss'

const Dashboard = () => {
    const { activePage } = useSelector(state => state.general);
    const { thumbnail } = useSelector(state => state.user);

    const getActivePage = () => {
        switch(activePage) {
            case 'listen': return 'Слухати зараз';
            case 'discover': return 'Огляд';
            case 'lib': return 'Бібіліотека';
            case 'search': return 'Пошук';

            default: return activePage;
        }
    }

    return (
        <div className='main-container'>
            <header className="header container">
                <h1>{getActivePage()}</h1>
                <div className="user-menu">
                    <img src={thumbnail ? thumbnail : userIcon} alt="user"/>
                </div>
            </header>
            <Outlet />
            <Navbar activePage={activePage}/>
        </div>
    );
};

export default Dashboard;