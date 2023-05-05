import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchResults, setData } from './helpers/thunk';
import useHttp from '../../utils/useHttps';

import './searchPannel.scss'

const SearchPannel = () => {
    const [search, setValue] = useState('');
    const dispatch = useDispatch();
    const { getRequest } = useHttp();

    const onSearch = (string) => {
        setValue(string); 
    }

    useEffect(() => {
        if(search.length != 0) {
            dispatch(fetchSearchResults(getRequest, search));
        } else {
            dispatch(setData([]))
        }
    }, [search])

    return (
        <div className="search">
            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.4939 17.9514C13.5318 19.4186 11.0868 20.0882 8.65094 19.8253C6.21508 19.5624 3.96919 18.3867 2.36527 16.5347C0.761352 14.6827 -0.0815424 12.2919 0.00622578 9.84347C0.093994 7.39504 1.10591 5.07073 2.83832 3.33832C4.57073 1.60591 6.89504 0.593994 9.34347 0.506226C11.7919 0.418458 14.1827 1.26135 16.0347 2.86527C17.8867 4.46919 19.0624 6.71508 19.3253 9.15094C19.5882 11.5868 18.9186 14.0318 17.4514 15.9939L24.6114 23.1539C24.8636 23.415 25.0031 23.7647 24.9999 24.1277C24.9968 24.4906 24.8512 24.8379 24.5945 25.0945C24.3379 25.3512 23.9906 25.4968 23.6277 25.4999C23.2647 25.5031 22.915 25.3636 22.6539 25.1114L15.4939 17.9514ZM16.6125 10.1906C16.6125 12.0264 15.8832 13.787 14.5851 15.0851C13.287 16.3832 11.5264 17.1125 9.69061 17.1125C7.85482 17.1125 6.09422 16.3832 4.79611 15.0851C3.49801 13.787 2.76875 12.0264 2.76875 10.1906C2.76875 8.35482 3.49801 6.59422 4.79611 5.29611C6.09422 3.99801 7.85482 3.26875 9.69061 3.26875C11.5264 3.26875 13.287 3.99801 14.5851 5.29611C15.8832 6.59422 16.6125 8.35482 16.6125 10.1906Z" fill="#767676"/>
            </svg>
            <input
                onChange={(e) => onSearch(e.target.value)}
                value={search}
                placeholder='Пошук...' 
            />
        </div>
    )
}

export default SearchPannel