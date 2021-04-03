import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { PokemonModal } from "@components/PokemonModal"
import { QueryClient, QueryClientProvider } from 'react-query'
import userEvent from '@testing-library/user-event' // testing helpers for imitating user events

const queryClient = new QueryClient();

const samplePokemon: IPokemon = {
    id: 1,
    name: 'balbasur',
    url: 'https://pokeapi.co/api/v2/pokemon/21/',
    sprites: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png',
        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png'
    }
}

describe("PokemonModal component", () => {
    const onExit = jest.fn()
    it("renders", async () => {
        // @ts-ignore
        fetch.mockResponseOnce(JSON.stringify(samplePokemon));

        const { getByTestId } = render(<QueryClientProvider client={queryClient}>
            <PokemonModal url={samplePokemon.url} onExit={onExit} />
        </QueryClientProvider>)
        expect(getByTestId("pokemon-modal")).toBeInTheDocument()
        await new Promise((r) => setTimeout(r, 200))
    })

    it("calls onExit when close button clicked", () => {
        const { getByRole } = render(<QueryClientProvider client={queryClient}>
            <PokemonModal url={samplePokemon.url} onExit={onExit} />
        </QueryClientProvider>)

        const closeButton = getByRole('button', { name: 'close modal' })
        expect(closeButton).toBeInTheDocument()
        userEvent.click(closeButton)
        expect(onExit).toHaveBeenCalled()
    })
    it("calls onExit when backdrop clicked", () => {
        const { getByTestId } = render(<QueryClientProvider client={queryClient}>
            <PokemonModal url={samplePokemon.url} onExit={onExit} />
        </QueryClientProvider>)

        const backdrop = getByTestId('pokemon-modal')
        expect(backdrop).toBeInTheDocument()
        userEvent.click(backdrop)
        expect(onExit).toHaveBeenCalled()
    })

})