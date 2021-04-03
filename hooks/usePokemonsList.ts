import { useInfiniteQuery, QueryStatus } from 'react-query'
import { getPokemons } from '@utils/queries'
import { QueryKey } from '@utils/constants'

export const usePokemonsList = (): { pages: IPokemonsData[], status: QueryStatus, hasNextPage: boolean, fetchNextPage: () => void } => {
    const { data, status, hasNextPage, fetchNextPage } = useInfiniteQuery(QueryKey.PokemonsList, getPokemons, {
        getNextPageParam: (lastPage) => lastPage.pageParam
    })

    return { pages: typeof data !== 'undefined' ? data.pages : [], status, hasNextPage, fetchNextPage }
}

