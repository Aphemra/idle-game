export class Skill {
	constructor(name, currentExp = 0, currentLevel = 1, locked = true) {
		this.name = name;
		this.currentExp = currentExp;
		this.currentLevel = currentLevel;
		this.locked = locked;
	}
	unlock() {
		this.locked = false;
	}
}

export function buildSkills(skillNames) {
	let skills = [];
	skillNames.forEach((name) => skills.push(new Skill(name)));
	return skills;
}
