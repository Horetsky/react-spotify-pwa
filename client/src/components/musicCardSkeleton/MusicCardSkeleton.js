import './style.scss'
const MusicCardSkeleton = () => {
    return (
        <div className="skeleton-container">
            <div className='slider-container slider-small'>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
            </div>
        </div>
            
    );
};

const SkeletonCard = () => {
    return (
	        <div className="card">
	        	<div className="card-img skeleton">

	        	</div>
	        	<div className="card-body">
	        		<h2 className="card-title skeleton">
                        
	        		</h2>

	        		<p className="card-intro skeleton">
                       
	        		</p>
	        	</div>
	        </div>
    );
}

export default MusicCardSkeleton;