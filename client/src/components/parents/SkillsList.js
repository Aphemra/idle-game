import Skill from "../containers/Skill";
import s from "../../styles/modules/SkillsList.module.scss";

export default function SkillsList() {
	const skills = [
		{ name: "attack", currentExp: 100, currentLevel: 5 },
		{ name: "strength", currentExp: 150, currentLevel: 2 },
		{ name: "health", currentExp: 90, currentLevel: 1 },
		{ name: "defense", currentExp: 25, currentLevel: 8 },
	];

	return (
		<div className={s.skillList}>
			<div className={s.name}>Skills</div>
			{skills.map((skill) => {
				return <Skill key={skill.name} name={skill.name} />;
			})}
		</div>
	);
}
