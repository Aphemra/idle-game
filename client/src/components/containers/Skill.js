import { useState } from "react";
import ProgressBar from "../bits/ProgressBar";
import s from "../../styles/modules/Skill.module.scss";

export default function Skill({ name }) {
	const [progress, setProgress] = useState(0);

	function handleClick() {
		// Replace this entire function later with exp and level handled
		setProgress((progress) => (progress + 1 >= 100 ? 0 : progress + 1));
	}

	return (
		<div className={s.skill} style={{ width: "12rem" }} onClick={handleClick}>
			<div className={s.name}>{name}</div>
			<ProgressBar percentage={progress / 100} width="10" height="1" />
		</div>
	);
}
