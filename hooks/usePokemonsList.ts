import { useInfiniteQuery, QueryStatus } from 'react-query'
import { API_BASE } from '@utils/constants'

const getPokemons = async ({ pageParam = 1 }): Promise<IPokemonsData> => {
    const response = await fetch(`${API_BASE}/pokemon?limit=${20}&offset=${(pageParam - 1) * 20}`)

    const { data }: IPokemonsJSONResponse = await response.json()

    return { pages: data.results, nextPage: pageParam + 1 }
}

export const usePokemonsList = (): { pages: IPokemonsData[], status: QueryStatus } => {
    const { data, status } = useInfiniteQuery(QueryKey.PokemonsList, ({ pageParam = 1 }) => getPokemons(pageParam), {
        getNextPageParam: (lastPage) => lastPage.nextPage
    })

    return { pages: data.pages, status }
}

