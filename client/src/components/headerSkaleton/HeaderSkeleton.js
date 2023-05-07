import React from 'react';

const HeaderSkeleton = () => {
    return (
        <div className='header-skelet-container'>
            <div className="skeleton-cover">
                
            </div>
            <div className='skeleton-track-info'>
                <div className='skeleton-info-text'>
                    <div className='skeleton-caption'></div>
                    <div className='skeleton-artists-wrapper'></div>
                </div>
                    

                <div className='track-control'>
                    <button className='skeleton-play'></button>
                    
                    <button className='skeleton-play'></button>
                 </div>
            </div>   
        </div>
    );
};

export default HeaderSkeleton;