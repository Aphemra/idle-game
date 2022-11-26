import { atom } from "jotai";
import { setLevels } from "../../utils/classes/Level";
import { buildSkills } from "../../utils/classes/Skill";

// Default starting values
const skillList = ["attack", "strength", "health", "defense"];
const startingInventory = [];
const maxLevels = 100;
const tickSpeed = 1000;
const money = 0;

// Building atoms from starting values (or saved values)
export const skillsAtom = atom(buildSkills(skillList));
export const inventoryAtom = atom(startingInventory);
export const tickSpeedAtom = atom(tickSpeed);
export const moneyAtom = atom(money);

// Other required exports
export const levelsAtom = setLevels(maxLevels);
export const saveInterval = 5000;
