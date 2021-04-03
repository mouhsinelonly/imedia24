import { useCallback, useEffect } from 'react'
export const useEscDown = (callback: () => void) => {
    const _OnEscKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            callback()
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", _OnEscKeyDown, false);

        return () => {
            document.removeEventListener("keydown", _OnEscKeyDown, false);
        };
    }, []);
}