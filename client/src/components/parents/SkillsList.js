import Skill from "../containers/Skill";
import s from "../../styles/modules/SkillsList.module.scss";
import { useAtom } from "jotai";
import { skillsAtom as sk } from "../state/globals";

export default function SkillsList() {
	const [skills, setSkills] = useAtom(sk);

	return (
		<div className={s.skillList}>
			<div className={s.name}>Skills</div>
			{skills.map((skill) => {
				return <Skill key={skill.name} skill={skill} />;
			})}
		</div>
	);
}
