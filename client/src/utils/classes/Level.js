import { levelsAtom } from "../../components/statics/globals";

export class Level {
	constructor(level, exp) {
		this.level = level;
		this.exp = exp;
	}
}

function sigma(start, end, expression) {
	const length = end - start;
	const mapFunction = (element, index) => (expression ? expression(index + start) : index + start);
	const summation = (x, y) => x + y;
	return Array.from({ length }, mapFunction).reduce(summation);
}

function experienceCurve(L) {
	return Math.floor(L + 300 * Math.pow(2, L / 7));
}

function getExperienceByLevel(level) {
	if (level <= 1) return 0;
	return Math.floor(0.25 * sigma(1, level, (i) => experienceCurve(i)));
}

export function setLevels(levelCap) {
	const levels = [];

	for (let i = 1; i <= levelCap; i++) {
		levels.push(new Level(i, getExperienceByLevel(i)));
	}

	return levels;
}

export function getLevelFromExperience(experience) {
	return levelsAtom.filter((level) => experience >= level.exp).length;
}
