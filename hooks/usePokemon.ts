import { useQuery, QueryStatus } from 'react-query'
import { getPokemon } from '@utils/queries'

export const usePokemon = (url: string): { pokemon: IPokemon, status: QueryStatus } => {
    const { data, status } = useQuery(url, () => getPokemon(url))

    return { pokemon: data, status }
}

