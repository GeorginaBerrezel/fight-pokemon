<script lang="ts">
    export let pokemon: {
        name: string;
        id: number;
        sprites: { front_default: string };
    };
</script>

<ul>
    <a href="/pokemon/{pokemon.id}">
        <p>{pokemon.id}</p>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>{pokemon.name}</p>
    </a>
</ul>

<style>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
        display: block;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 16px;
        transition: transform 0.3s;
    }

    a:hover {
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


