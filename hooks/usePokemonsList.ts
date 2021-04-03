import { useInfiniteQuery, QueryStatus } from 'react-query'
import { API_BASE } from '@utils/constants'
import { QueryKey } from '@utils/constants'

const getPokemons = async ({ pageParam = 1 }): Promise<IPokemonsData> => {
    console.log(pageParam)
    const response = await fetch(`${API_BASE}/pokemon?limit=${20}&offset=${(pageParam - 1) * 20}`)

    const { results }: IPokemonsJSONResponse = await response.json()

    return { items: results, pageParam: pageParam + 1 }
}

export const usePokemonsList = (): { pages: IPokemonsData[], status: QueryStatus, hasNextPage: boolean, fetchNextPage: () => void } => {
    const { data, status, hasNextPage, fetchNextPage } = useInfiniteQuery(QueryKey.PokemonsList, getPokemons, {
        getNextPageParam: (lastPage) => lastPage.pageParam
    })

    return { pages: typeof data !== 'undefined' ? data.pages : [], status, hasNextPage, fetchNextPage }
}

