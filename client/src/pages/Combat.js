import { useAtom } from "jotai";
import { useState } from "react";
import { skills as sk, getLevelFromExperience as getLevel } from "../components/state/globals";
import s from "../styles/modules/Combat.module.scss";

export default function Combat() {
	const [skills, setSkills] = useAtom(sk);
	const [expGained, setExpGained] = useState(1);

	function handleTrainSkill(skillToTrain, expGained) {
		setSkills((previousState) => {
			const newState = previousState.map((skill) => {
				if (skill.name === skillToTrain) {
					const newExp = skill.currentExp + expGained;
					return { ...skill, currentExp: newExp, currentLevel: getLevel(newExp) };
				}
				return skill;
			});
			return newState;
		});
	}

	function handleInputChange(e) {
		setExpGained(parseInt(e.target.value));
	}

	// Need to eventually move training buttons to their own component so they don't share state
	return (
		<div className={s.combat}>
			Combat
			<input onChange={handleInputChange} type="number" placeholder="Increase by..." defaultValue={1} />
			{skills.map((skill) => {
				return (
					<button key={skill.name} type="button" onClick={() => handleTrainSkill(skill.name, expGained)}>
						Train {skill.name}
					</button>
				);
			})}
		</div>
	);
}
