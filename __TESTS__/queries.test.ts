import { renderHook } from '@testing-library/react-hooks'
import "@testing-library/jest-dom/extend-expect"
import { fireEvent, act } from "@testing-library/react"
import { getPokemons, getPokemon } from "@utils/queries";

const samplePokemon: IPokemon = {
    id: 1,
    name: 'balbasur',
    url: 'https://pokeapi.co/api/v2/pokemon/21/',
    sprites: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png',
        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png'
    }
}

describe('test REST queries', () => {
    it('should return list of pokemons', async () => {
        // @ts-ignore
        fetch.mockResponseOnce(JSON.stringify({ results: [samplePokemon] }));

        const data = await getPokemons({})

        expect(data.items).toEqual([samplePokemon])
        expect(data.pageParam).toEqual(2)
    })

    it('should return single pokemon', async () => {
        // @ts-ignore
        fetch.mockResponseOnce(JSON.stringify(samplePokemon));

        const data = await getPokemon(samplePokemon.url)

        expect(data).toEqual(samplePokemon)
    })
})