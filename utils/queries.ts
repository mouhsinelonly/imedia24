import { API_BASE } from '@utils/constants'

export const getPokemons = async ({ pageParam = 1 }): Promise<IPokemonsData> => {
    console.log(pageParam)
    const response = await fetch(`${API_BASE}/pokemon?limit=${20}&offset=${(pageParam - 1) * 20}`)

    const { results }: IPokemonsJSONResponse = await response.json()

    return { items: results, pageParam: pageParam + 1 }
}