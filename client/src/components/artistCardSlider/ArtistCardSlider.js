import ArtistCard from "../artistCard/ArtistCard";

const ArtistCardSlider = ({ data, lable }) => {
    return (
        <>
            {
                lable ? 
                <div className='section-name'>
                     <h1>{lable}</h1>
                     <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M2.04746 0.668317C1.81612 0.443894 1.40485 0.443894 1.17351 0.668317C0.942165 0.892739 0.942165 1.29171 1.17351 1.51613L8.88485 8.99688L1.17351 16.4776C0.942165 16.7021 0.942165 17.101 1.17351 17.3254C1.30203 17.4501 1.45625 17.5 1.61048 17.5C1.76471 17.5 1.91894 17.4501 2.04746 17.3254L10.1701 9.42079C10.2729 9.29611 10.35 9.1465 10.35 8.99688C10.35 8.84727 10.2729 8.69765 10.1701 8.57297L2.04746 0.668317Z" fill="#201F20" stroke="black"/>
                     </svg>
                </div> : null
            }

             <div className='edge-blur'>
                 <div className='slider-container slider-small'>
                     {
                         data?.map(item => (
                            <ArtistCard 
                                key={item.id} 
                                id={item.id}
                                name={item.name}
                                thumbnail={item.thumbnail}
                            />
                         ))
                     }
                 </div>
             </div>
        </>
    );
};

export default ArtistCardSlider;