<menu>
    <nav>
        <img src="pokeball.png" alt="Logo" />
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/list-fighters">List fighters</a></li>
        </ul>
    </nav>
</menu>

<slot />

<style>
    menu {
        width: 100vw;
        padding: 0;
        margin: 0;
    }
    nav {
        display: flex;
        width: 100vw;
    }

    img {
        margin-right: auto;
        max-height: 40px;
        margin-top: 8px;
    }

    ul {
        display: flex;
        justify-content: flex-end;
        margin: 0;
        padding: 0;
        list-style-type: none;
        overflow: hidden;
        width: 100vw;
    }

    li {
        cursor: pointer;
    }

    li a {
        display: block;
        color: black;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
</style>