import { useSelector } from "react-redux";
import { Categories } from "../../modules";

import { SearchPannel } from "../../modules";
import SearchItem from '../../components/searchItem/SearchItem'
const SearchPage = () => {
    const {
        search
    } = useSelector(state => state.searchPanelSlice)
    return (
        <div className='page-container'>
            <SearchPannel />

            <div className='search-content'>
                
                <SearchResults data={search}/>
                
            </div>
            {
                search.length > 0 ? null : <Categories />
            }
        </div>
    );
};

const SearchResults = ({ data }) => {
    return data?.map(item => (
            <SearchItem 
                key={item.id}
                id={item.id}
                name={item.name}
                artist={item.artist}
                artistId={item.artistId}
                thumbnail={item.thumbnail}
            />
        ))
        
    
}

export default SearchPage;