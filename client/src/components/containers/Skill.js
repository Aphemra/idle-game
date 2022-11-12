import ProgressBar from "../bits/ProgressBar";
import s from "../../styles/modules/Skill.module.scss";
import { levels } from "../state/globals";

export default function Skill({ skill }) {
	const currentLevelExp = levels.filter((level) => level.level === skill.currentLevel)[0].exp;
	const nextLevelExp = levels.filter((level) => level.level === skill.currentLevel + 1)[0].exp;
	const expToNextLevel = nextLevelExp - currentLevelExp;
	// do floor instead of round
	const progress = Math.round(((skill.currentExp - currentLevelExp) / expToNextLevel) * 1000) / 1000;

	return (
		<div className={s.skill} style={{ width: "12rem" }}>
			<div className={s.name}>{skill.name}</div>
			<div className={s.name}>Level: {skill.currentLevel}</div>
			<div className={s.name}>EXP: {skill.currentExp}</div>
			<ProgressBar percentage={progress} width="10" height="1" />
		</div>
	);
}
