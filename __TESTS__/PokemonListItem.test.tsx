import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import userEvent from '@testing-library/user-event' // testing helpers for imitating user events
import { PokemonListItem } from "@components/PokemonListItem"

const samplePokemon: IPokemon = {
    id: 1,
    name: 'balbasur',
    url: 'https://pokeapi.co/api/v2/pokemon/21/'
}

describe("PokemonListItem component", () => {
    const onClick = jest.fn()
    it("renders with pokemon name", () => {
        const { getByTestId, getByText } = render(<PokemonListItem onClick={onClick} pokemon={samplePokemon} />)
        expect(getByTestId("pokemon-row")).toBeInTheDocument()
        expect(getByText(samplePokemon.name)).toBeInTheDocument()
    })

    it("calls onClick prop when clicked", () => {
        const { getByTestId } = render(<PokemonListItem onClick={onClick} pokemon={samplePokemon} />)
        const container = getByTestId("pokemon-row")
        userEvent.click(container)
        expect(onClick).toHaveBeenCalled()

    })

})