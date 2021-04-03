import { API_BASE } from '@utils/constants'

export const getPokemons = async ({ pageParam = 1 }: { pageParam?: number }): Promise<IPokemonsData> => {

    const response = await fetch(`${API_BASE}/pokemon?limit=${20}&offset=${(pageParam - 1) * 20}`)

    const { results }: IPokemonsJSONResponse = await response.json()

    return { items: results, pageParam: pageParam + 1 }
}

export const getPokemon = async (url: string): Promise<IPokemon> => {

    const response = await fetch(url)

    const pokemon: IPokemon = await response.json()

    return pokemon
}