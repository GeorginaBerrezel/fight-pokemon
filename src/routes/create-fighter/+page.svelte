<script lang="ts">
    import { onMount } from 'svelte';
    import pokemonList from '../../lib/data.json';

    let selectedPokemonId = null;
    let customName = '';

    // Ajout d'une fonction pour obtenir les informations d'un Pokémon en fonction de son ID
    function getPokemonInfo(pokemonId) {
        return pokemonList.find(pokemon => pokemon.id === pokemonId);
    }

    onMount(() => {
        // Fonction pour gérer la sélection du Pokémon
        function handlePokemonSelection(event) {
            selectedPokemonId = event.target.value;
        }

        // Fonction pour soumettre le formulaire
        function handleSubmit() {
            // Obtenez les informations du Pokémon sélectionné
            const selectedPokemon = getPokemonInfo(selectedPokemonId);

            // Traitez le formulaire ici, en utilisant selectedPokemonId, customName et selectedPokemon
            // Vous pouvez également générer le reste des informations nécessaires (PV, force) ici
        }
    });
</script>

<h1>Create your Pokemon</h1>

<form on:submit|preventDefault={handleSubmit}>
    <label>
        Choose your pokemon :
        <select bind:value={selectedPokemonId} on:change={handlePokemonSelection}>
            {#each pokemonList as { id, name }}
                <option value={id}>{name}</option>
            {/each}
        </select>
    </label>

    <!-- Ajout de l'image du Pokémon sélectionné -->
    {#if selectedPokemonId !== null}
        {#if getPokemonInfo(selectedPokemonId) !== undefined}
            <img src={getPokemonInfo(selectedPokemonId).sprites.front_default} alt="Pokemon Image" style="max-width: 100%; margin-bottom: 10px;" />

        {/if}
    {/if}

    <label>
        Name of your fighter (optional) :
        <input type="text" bind:value={customName} />
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
