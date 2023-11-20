import {useEffect, useState} from 'react';

const useDeviceWidth = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    return {
        isMobileDevice : width < 991
    }
}

export default useDeviceWidth;