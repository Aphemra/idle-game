import { atom } from "jotai";
import { setLevels } from "../../utils/levelUtils";

export const levels = setLevels(100);
export const tickSpeed = atom(1000);

const inventory = atom([]);
export const skills = atom([
	{ name: "attack", currentExp: 0, currentLevel: 1 },
	{ name: "strength", currentExp: 0, currentLevel: 1 },
	{ name: "health", currentExp: 0, currentLevel: 1 },
	{ name: "defense", currentExp: 0, currentLevel: 1 },
]);
export const money = atom(0);

export function getLevelFromExperience(experience) {
	return levels.filter((level) => experience >= level.exp).length;
}
