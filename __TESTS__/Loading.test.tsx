import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { Loading } from "@components/Loading"


describe("Loading component", () => {
    const onClick = jest.fn()
    it("renders", () => {
        const { getByTestId, getByText } = render(<Loading />)
        expect(getByTestId("loading-indicator")).toBeInTheDocument()
    })

})