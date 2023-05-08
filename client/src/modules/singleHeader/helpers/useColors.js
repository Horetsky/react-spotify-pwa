import { extractColors } from 'extract-colors';
import { useDispatch } from 'react-redux';
import { setSolidColor } from './fetchHeaderData';

export default function useColors() {
    const dispatch = useDispatch()
    const options = {
        colorValidator : ( red ,  green ,  blue ,  alpha  =  255 )  =>  alpha  >  250 ,
        crossOrigin: "anonimus"
    }
    
    const getColor = (url) => {
        if (url) {
            extractColors(url, options)
                .then(data => dispatch(setSolidColor(data[0].hex)))
                .catch(dispatch(setSolidColor('#fff')))
        }
    }

    return {
        getColor
    }
}