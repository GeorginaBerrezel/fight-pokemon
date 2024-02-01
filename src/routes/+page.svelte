<script lang="ts">
    // import Pokemon from '$lib/components/Pokemon.svelte';
    export let data;
    console.log(data);

    // Sort fighters by points in descending order
    const sortedFighters = [...data.fighters].sort((a, b) => b.points - a.points);
</script>

<h1>Choose fighters !</h1>

<div>
    <ul>
        {#each sortedFighters as { name, src, points }}
            <li>
                <img src={src} alt={`Image de ${name}`} />
                <p>{name}</p>
                <p>Points: {points}</p>
            </li>
        {/each}
    </ul>
</div>

<style>
    h1 {
        text-align: center;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around; /* Ajuste l'espacement entre les colonnes */
        gap: 16px;
        margin: 20px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
    }

    li {
        flex: 0 0 calc(33.33% - 16px); /* 33.33% pour trois colonnes, ajuste selon tes besoins */
        box-sizing: border-box;
        text-align: center;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 16px;
        transition: transform 0.3s;
    }

    li:hover {
        transform: scale(1.05);
    }

    img {
        max-width: 100%;
        border-radius: 4px;
        margin-bottom: 8px;
    }

    p {
        font-size: 2rem;
        margin: 0;
    }
</style>


