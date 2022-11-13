import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { skills as sk, getLevelFromExperience as getLevel, tickSpeed as ts, money as m } from "../components/state/globals";
import s from "../styles/modules/Combat.module.scss";

export default function Combat() {
	const [skills, setSkills] = useAtom(sk);
	const [tickSpeed, setTickSpeed] = useAtom(ts);
	const [money, setMoney] = useAtom(m);

	const [currentSkill, setCurrentSkill] = useState();

	const expGained = 15;

	// Game loop probably
	useEffect(() => {
		const interval = setInterval(() => {
			// Logic to be done every tickSpeed milliseconds
			if (!currentSkill) return;
			trainSkill(currentSkill, expGained);
		}, tickSpeed);

		return () => clearInterval(interval);
	});

	function handleSkillSwitch(skillToTrain) {
		setCurrentSkill(skillToTrain);
	}

	function trainSkill(skillToTrain, expGained) {
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

	// Need to eventually move training buttons to their own component so they don't share state
	return (
		<div className={s.combat}>
			Combat
			{/* <div>{`Money: ${money}`}</div> */}
			<div className={s.training}>{`Training: ${currentSkill || "Nothing"}`}</div>
			<button className={s.stopTraining} type="button" onClick={() => handleSkillSwitch(undefined)}>
				Stop Training
			</button>
			{skills.map((skill) => {
				return (
					<button key={skill.name} type="button" onClick={() => handleSkillSwitch(skill.name)}>
						Train {skill.name}
					</button>
				);
			})}
		</div>
	);
}
