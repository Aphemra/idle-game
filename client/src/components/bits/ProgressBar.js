import s from "../../styles/modules/ProgressBar.module.scss";

export default function ProgressBar({ percentage, width, height }) {
	return (
		<>
			<div className={s.progressBar} style={{ width: `${width}rem`, height: `${height}rem` }}>
				<div className={s.background}></div>
				<div className={s.foreground} style={{ right: `${width - width * percentage}rem` }}></div>
				<div className={s.progress}>{Math.round(percentage * 100)}%</div>
			</div>
		</>
	);
}
