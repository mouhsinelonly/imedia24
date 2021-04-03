declare enum QueryKey {
    PokemonsList = 'POKEMONS_LIST'
}

declare type IPokemon = {
    name: string
    url: string
}

type IPokemonsData = {
    pages: IPokemon[]
    nextPage: number
}

type IPokemonsJSONResponse = {
    data?: {
        results: IPokemon[]
    }
    errors?: Array<{ message: string }>
}