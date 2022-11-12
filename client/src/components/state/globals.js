import { atom } from "jotai";
import { setLevels } from "../../utils/levelUtils";

export const levels = setLevels(100);

const inventory = atom([]);
export const skills = atom([
	{ name: "attack", currentExp: 0, currentLevel: 1 },
	{ name: "strength", currentExp: 0, currentLevel: 1 },
	{ name: "health", currentExp: 0, currentLevel: 1 },
	{ name: "defense", currentExp: 0, currentLevel: 1 },
]);
const money = atom(0);

export function getLevelFromExperience(experience) {
	return levels.filter((level) => experience >= level.exp).length;
}
