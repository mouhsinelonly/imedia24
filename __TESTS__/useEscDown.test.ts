import { renderHook } from '@testing-library/react-hooks'
import "@testing-library/jest-dom/extend-expect"
import { fireEvent, act } from "@testing-library/react"
import { useEscDown } from "@hooks/useEscDown";


test('should call callback when esc key down', async () => {
    const onExit = jest.fn();
    renderHook(() => useEscDown(onExit))

    await act(async () => {
        fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' })
        expect(onExit).toBeCalled()

        fireEvent.keyDown(document, { key: 'Enter', code: 'Enter' })
        expect(onExit).toBeCalledTimes(1)

    })
})