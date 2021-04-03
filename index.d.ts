declare type IPokemon = {
    name: string
    url: string
}

type IPokemonsData = {
    pages: IPokemon[]
    nextPage: number
}

type IPokemonsJSONResponse = {
    results: IPokemon[]
}