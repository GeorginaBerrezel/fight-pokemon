import {readFightersList} from "$lib/server/fighter";
import data from '$lib/data.json';

export function load() {
    const fighters = readFightersList();

    const newFighters = fighters.map((fighter) => {
        const { name, uuid, id, hp, strength } = fighter;
        const espece = data[id - 1];
        const src = espece.sprites.front_default;
        const points = calculatePoints(hp, strength);

        return { name, uuid, id, src, hp, strength, points };
    });

    return {
        fighters: newFighters
    };
}

function calculatePoints(hp: number, strength: number): number {
    // Same function as in fighter.ts
    return hp + strength;
}
