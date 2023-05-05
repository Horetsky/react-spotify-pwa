import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useHttp from '../../utils/useHttps'
import { fetchCategor } from './helpers/thunk';

import CategorCard from '../../components/categorCard/CategorCard';
import './style.scss';

const Categories = () => {
    const { getRequest } = useHttp();
    const dispatch = useDispatch() ;
    const { reload } = useSelector(state => state.categoriesSlice)

    useEffect(() => {
        if (!reload) return;
        dispatch(fetchCategor(getRequest))
        console.log('categor fetch');
    }, [dispatch, reload])

    const {
        categories
    } = useSelector(state => state.categoriesSlice)
    return (
        <div className='categories'>
            {
                categories?.map(item => (
                    <CategorCard 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        icon={item.thumbnail}
                    />
                ))
            }   
        </div>
    );
};

export default Categories;