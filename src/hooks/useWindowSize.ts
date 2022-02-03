import { useState, useEffect, useCallback } from 'react'

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined as undefined | number,
        height: undefined as undefined | number,
    })
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const isInViewport = useCallback(
        (limit: number) => (windowSize?.width ? windowSize.width <= limit : false),
        [windowSize.width],
    )

    return {
        ...windowSize,
        isMobile: isInViewport(950),
    }
}
