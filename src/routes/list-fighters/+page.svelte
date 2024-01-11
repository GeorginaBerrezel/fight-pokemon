<script lang="ts">
    import Pokemon from '$lib/components/Pokemon.svelte';
    export let data;
</script>

<h1>List fighters</h1>

<div>
    {#each data.pokemon as pokemon}
        <Pokemon {pokemon} />
    {/each}
</div>


<style>
    h1 {
        text-align: center;
    }

    div {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 16px;
        justify-content: center;
        margin: 20px;
    }
</style>


