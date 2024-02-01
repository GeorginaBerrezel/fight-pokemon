import type {Fighter, PokemonFighter} from "$lib/types";
import { readFileSync, writeFileSync } from "fs";
import { randomUUID } from "crypto";
import data from '../../lib/data.json';

console.log(data);

let fightersList: Fighter[] = readFightersList();

// Creer un combatant function exporter dans un fichier json mes combatants
export function createFighter(id: number, name: string, hp: number, strength: number) {
    fightersList.push({
        uuid: randomUUID(),
        name,
        id,
        hp,
        strength,
        points: calculatePoints(hp, strength)
    });
    saveFightersList();
}

function calculatePoints(hp: number, strength: number): number {
    return hp + strength;
}

// puis Appel saveFighters list

export function saveFightersList() {
    writeFileSync("./generated/fighters.json", JSON.stringify(fightersList));
}


// Ecriture, lecture et sauvegarde
export function readFightersList() {
    try {
        const data = readFileSync("generated/fighters.json", "utf-8");
        return JSON.parse(data) as PokemonFighter[];
    } catch (e) {
        console.log("No file");
        return []  as PokemonFighter[];
    }
}

export function renameFighter(uuid: string, newName: string) {
    const fighter = fightersList.find((fighter) => fighter.uuid === uuid);
    if (fighter) {
        fighter.name = newName;
        saveFightersList();
    }
}

export function deleteFighter(uuid: string) {
    fightersList = fightersList.filter((fighter) => fighter.uuid !== uuid);
    saveFightersList();
}
