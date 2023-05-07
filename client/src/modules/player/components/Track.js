import { useRef, useEffect } from 'react';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import '../style.scss'

const Track = ({ sound, isPlaying, play, pause }) => {
    const player = useRef()
    useEffect(() => {
        if (!isPlaying) {
            player.current.audio.current.pause()
        } else {
            player.current.audio.current.play()  
        }
    }, [sound, isPlaying])

    return (
        <div className="player-track">
            <AudioPlayer
                ref={player}
                src={`${sound}.mp3`}
                onPlay={() => play()}
                onPause={() => pause()}
                autoPlay={false}
                layout='horizontal'

                showJumpControls={true}
                customVolumeControls={[]}
                customAdditionalControls={[]}
                autoPlayAfterSrcChange={false}
                customIcons={{
                    play: 
                            <svg width="40" height="46" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg" className='play-btn'>
                                <path d="M0 3.78436C0 0.853225 3.20517 -0.961028 5.73421 0.536742L38.1462 19.752C40.6179 21.2166 40.6179 24.7807 38.1462 26.2454L5.73421 45.4625C3.20517 46.9621 0 45.146 0 42.2149V3.78436Z" fill="black"/>
                            </svg>,
                    pause: 
                            <svg width="35" height="46" viewBox="0 0 35 46" fill="none" xmlns="http://www.w3.org/2000/svg" className='play-btn'>
                                <path d="M13.125 1.84V44.16C13.125 44.648 12.8945 45.116 12.4843 45.4611C12.0741 45.8061 11.5177 46 10.9375 46H2.1875C1.60734 46 1.05094 45.8061 0.640704 45.4611C0.230469 45.116 0 44.648 0 44.16V1.84C0 1.352 0.230469 0.88399 0.640704 0.538923C1.05094 0.193857 1.60734 0 2.1875 0H10.9375C11.5177 0 12.0741 0.193857 12.4843 0.538923C12.8945 0.88399 13.125 1.352 13.125 1.84ZM35 1.84V44.16C35 44.648 34.7695 45.116 34.3593 45.4611C33.9491 45.8061 33.3927 46 32.8125 46H24.0625C23.4823 46 22.9259 45.8061 22.5157 45.4611C22.1055 45.116 21.875 44.648 21.875 44.16V1.84C21.875 1.352 22.1055 0.88399 22.5157 0.538923C22.9259 0.193857 23.4823 0 24.0625 0H32.8125C33.3927 0 33.9491 0.193857 34.3593 0.538923C34.7695 0.88399 35 1.352 35 1.84Z" fill="black"/>
                            </svg>,

                    next: 
                            <svg width="36" height="21" viewBox="0 0 36 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1.72764C0 0.389516 1.44233 -0.43873 2.58039 0.245035L17.1658 9.01721C18.2781 9.68586 18.2781 11.3129 17.1658 11.9816L2.58039 20.7546C1.44233 21.4392 0 20.6101 0 19.272V1.72764Z" fill="black"/>
                                <path d="M18 1.72764C18 0.389516 19.4423 -0.43873 20.5804 0.245035L35.1658 9.01721C36.2781 9.68586 36.2781 11.3129 35.1658 11.9816L20.5804 20.7546C19.4423 21.4392 18 20.6101 18 19.272V1.72764Z" fill="black"/>
                            </svg>,
                    previous: 
                            <svg width="36" height="21" viewBox="0 0 36 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36 1.72764C36 0.389516 34.5577 -0.43873 33.4196 0.245035L18.8342 9.01721C17.7219 9.68586 17.7219 11.3129 18.8342 11.9816L33.4196 20.7546C34.5577 21.4392 36 20.6101 36 19.272V1.72764Z" fill="black"/>
                                <path d="M18 1.72764C18 0.389516 16.5577 -0.43873 15.4196 0.245035L0.834223 9.01721C-0.278074 9.68586 -0.278074 11.3129 0.834223 11.9816L15.4196 20.7546C16.5577 21.4392 18 20.6101 18 19.272V1.72764Z" fill="black"/>
                            </svg>
                            
                }}
            />
        </div>
    )
}

export default Track