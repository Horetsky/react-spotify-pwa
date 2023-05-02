import { useParams } from 'react-router-dom'
import { SingleTrackView } from "../../modules";
import './style.scss';

const SingleTrackPage = () => {
    const { itemId } = useParams()
    return (
        <div className="single-track">
            
            <div className='single-main-content'>
                <div className='single-information'>
                    <SingleTrackView id={itemId}/>
                </div>
                <div className='single-lirics'>
                    <section>
                        <div className='section-name'>
                            <h1>Слова</h1>
                        </div>
                            <span>На жаль ця функція недоступна у цій версії {';('}</span>
                    </section>
                </div>
            </div>

        </div>
    );
};

export default SingleTrackPage;