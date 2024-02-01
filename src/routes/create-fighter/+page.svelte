<script>
    import pokemonList from '../../lib/data.json';

    let selectedPokemonId = 1;
    $: customName = pokemonList[selectedPokemonId - 1].name;

    function getPokemonInfo(pokemonId) {
        return pokemonList.find(pokemon => pokemon.id === pokemonId);
    }
    export let data;
</script>

<h1>Create your Pokemon</h1>

<form method="post">
    <label>
        Choose Pokemon :
        <select bind:value={selectedPokemonId} name="id">
            {#each pokemonList as { id, name, sprites }}
                <option value={id}>
                    {name}
                    <img src={sprites.front_default} alt={name} style="max-width: 24px; margin-left: 5px;" />
                </option>
            {/each}
        </select>
    </label>

    {#if selectedPokemonId !== null && getPokemonInfo(selectedPokemonId) !== undefined}
        <img src={getPokemonInfo(selectedPokemonId).sprites.front_default} alt="Pokemon Image" style="max-width: 100%; margin-bottom: 10px;" />
    {/if}

    <label>
        Name of fighter (optional) :
        <input type="text" name="pokemonName" value={customName} />
    </label>

    <button type="submit">Create a fighter</button>
</form>

<style>
    h1 {
        text-align: center;
        margin-bottom: 20px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
        margin: 0 auto;
    }

    label {
        margin: 10px 0;
        display: block;
    }

    select, input[type="text"] {
        margin-bottom: 10px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    button {
        margin-top: 20px;
        padding: 10px;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #45a049;
    }
</style>
