import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/routes';

const LibFilters = ({ func }) => {
    const [activeFilter, setActiveFilter] = useState(null)
    useEffect(() => {
        func(activeFilter)
    }, [activeFilter])
    return (
        <section className='lib-filters-container'>
            <div className='lib-filters slider-container'>
                <a className={!activeFilter ? 'display-none' : null}>
                    <button
                        onClick={() => setActiveFilter(null)}
                        className="play close-filter"
                    >   
                        <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.0476 0.962138C41.7458 0.666815 41.3874 0.432517 40.9929 0.272655C40.5983 0.112793 40.1754 0.030507 39.7482 0.030507C39.321 0.030507 38.8981 0.112793 38.5035 0.272655C38.109 0.432517 37.7506 0.666815 37.4488 0.962138L21.5 16.5082L5.55117 0.93028C5.24922 0.635345 4.89074 0.401389 4.49621 0.241771C4.10169 0.0821534 3.67883 3.10765e-09 3.2518 0C2.82477 -3.10765e-09 2.40192 0.0821534 2.00739 0.241771C1.61286 0.401389 1.25439 0.635345 0.95243 0.93028C0.650472 1.22522 0.410946 1.57536 0.247528 1.96071C0.0841095 2.34606 -3.18164e-09 2.75908 0 3.17618C3.18164e-09 3.59328 0.0841094 4.0063 0.247528 4.39165C0.410946 4.777 0.650472 5.12714 0.95243 5.42208L16.9013 21L0.95243 36.5779C0.650472 36.8729 0.410946 37.223 0.247528 37.6084C0.0841095 37.9937 0 38.4067 0 38.8238C0 39.2409 0.0841095 39.6539 0.247528 40.0393C0.410946 40.4246 0.650472 40.7748 0.95243 41.0697C1.25439 41.3647 1.61286 41.5986 2.00739 41.7582C2.40192 41.9178 2.82477 42 3.2518 42C3.67883 42 4.10169 41.9178 4.49621 41.7582C4.89074 41.5986 5.24922 41.3647 5.55117 41.0697L21.5 25.4918L37.4488 41.0697C37.7508 41.3647 38.1093 41.5986 38.5038 41.7582C38.8983 41.9178 39.3212 42 39.7482 42C40.1752 42 40.5981 41.9178 40.9926 41.7582C41.3871 41.5986 41.7456 41.3647 42.0476 41.0697C42.3495 40.7748 42.5891 40.4246 42.7525 40.0393C42.9159 39.6539 43 39.2409 43 38.8238C43 38.4067 42.9159 37.9937 42.7525 37.6084C42.5891 37.223 42.3495 36.8729 42.0476 36.5779L26.0987 21L42.0476 5.42208C43.2869 4.21152 43.2869 2.17269 42.0476 0.962138Z" fill="black"/>
                        </svg>
                    </button>
                </a>

                
                    <button className={activeFilter === 'playlist' ? 'display-none' : null}
                        onClick={() => setActiveFilter('playlist')}     
                    >   
                        Плейлісти
                    </button>


                    <button className={activeFilter === 'track' ? 'display-none' : null}
                        onClick={() => setActiveFilter('track')}     
                    >   
                        Треки
                    </button>
                

                
                    <button className={activeFilter === 'artist' ? 'display-none' : null}
                        onClick={() => setActiveFilter('artist')}
                    >   
                        Виконавці
                    </button>



                    <button className={activeFilter === 'albums' ? 'display-none' : null}
                        onClick={() => setActiveFilter('albums')}
                    >   
                        Альбоми
                    </button>

            </div>

        </section>
    )
}

export default LibFilters