import pokemonJson from '../../lib/data.json'

export function load() {
    return {
        pokemon: pokemonJson
    }
}