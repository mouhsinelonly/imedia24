declare type IPokemon = {
    id?: number
    name: string
    url?: string
    height?: number
    weight?: number
    order?: number
    base_experience?: number
    sprites?: IPokemonSprite
}

declare type IPokemonSprite = {
    front_default: string
    back_default: string
}

type IPokemonsData = {
    items: IPokemon[]
    pageParam: number
}

type IPokemonsJSONResponse = {
    results: IPokemon[]
}