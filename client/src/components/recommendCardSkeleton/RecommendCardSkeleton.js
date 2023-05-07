import './style.scss'
const RecommendCardSkeleton = () => {
    return (
        <div class="skeleton-container">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
            
    );
};

const SkeletonCard = () => {
    return (
	        <div class="card">
	        	<div class="card-img skeleton">

	        	</div>
	        	<div class="card-body">
	        		<h2 class="card-title skeleton">
        
	        		</h2>
	        		<p class="card-intro skeleton">
        
	        		</p>
	        	</div>
	        </div>
    );
}

export default RecommendCardSkeleton;