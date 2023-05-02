import './style.scss';

const ShareButton = () => {
    return (
        <button className='share'>
            <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.1235 11.1971L16.6951 20.7606C16.5633 20.8945 16.3952 20.9857 16.2122 21.0226C16.0292 21.0596 15.8396 21.0407 15.6672 20.9682C15.4948 20.8958 15.3475 20.7731 15.2439 20.6157C15.1403 20.4583 15.0851 20.2732 15.0853 20.084V15.3297C8.35579 15.7171 3.7418 20.1437 2.44658 21.546C2.2432 21.7663 1.9765 21.9159 1.68442 21.9736C1.39234 22.0312 1.08978 21.994 0.819789 21.8671C0.549797 21.7402 0.326133 21.5302 0.180627 21.267C0.0351214 21.0037 -0.0248119 20.7006 0.00935669 20.4008C0.446596 16.5443 2.52908 12.8349 5.87378 9.95629C8.6516 7.56543 12.0281 6.04843 15.0853 5.78305V0.957097C15.0851 0.76784 15.1403 0.582795 15.2439 0.425387C15.3475 0.267978 15.4948 0.145285 15.6672 0.0728399C15.8396 0.000394486 16.0292 -0.0185455 16.2122 0.0184175C16.3952 0.0553806 16.5633 0.146585 16.6951 0.280484L26.1235 9.84392C26.2111 9.93274 26.2807 10.0382 26.3281 10.1543C26.3756 10.2704 26.4 10.3949 26.4 10.5205C26.4 10.6462 26.3756 10.7707 26.3281 10.8868C26.2807 11.0029 26.2111 11.1083 26.1235 11.1971Z" fill="#FF4F72"/>
            </svg>
            <p>Поділитись</p>
            {
                // isModalOpen === 'pageModal' ? <ShareModal action={data} type={type}/> : null
            }
        </button>
    );
};

export default ShareButton;