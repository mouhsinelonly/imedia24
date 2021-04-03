import { useCallback, useEffect } from 'react'
export const useEscDown = (callback: () => void) => {
    const _OnEscKeyDown = useCallback((event) => {
        if (event.keyCode === 27) {
            callback()
        }
    }, [callback]);

    useEffect(() => {
        document.addEventListener("keydown", _OnEscKeyDown, false);

        return () => {
            document.removeEventListener("keydown", _OnEscKeyDown, false);
        };
    }, []);
}