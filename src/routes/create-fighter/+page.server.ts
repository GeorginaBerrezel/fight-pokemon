import {createFighter} from "$lib/server/fighter";

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const id = Number(data.get("id"));
        const name = data.get("pokemonName")?.toString();

        // Génération aléatoire des PV et de la force
        const hp = Math.floor(Math.random() * (200 - 50 + 1)) + 50; // Entre 50 et 200
        const strength = Math.floor(Math.random() * (50 - 20 + 1)) + 20; // Entre 20 et 50

        createFighter(id, name, hp, strength);
    },
};