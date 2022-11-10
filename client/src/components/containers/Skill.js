import { useState } from "react";
import ProgressBar from "../bits/ProgressBar";

export default function Skill() {
	const [progress, setProgress] = useState(0);

	function handleClick() {
		// Replace this entire function later with exp and level handled
		setProgress((progress) => (progress + 1 >= 100 ? 0 : progress + 1));
	}

	return (
		<div onClick={handleClick}>
			Skill
			<ProgressBar percentage={progress / 100} width="10" height="1" />
		</div>
	);
}
