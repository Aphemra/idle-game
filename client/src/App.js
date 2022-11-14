import Nav from "./components/parents/Nav";
import Content from "./components/parents/Content";
import { useEffect } from "react";
import { inventoryAtom, moneyAtom, skillsAtom, tickSpeedAtom, saveInterval } from "./components/state/globals";
import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";

const saveGameAtom = atomWithStorage("saveGame", {});

function App() {
	const [saveGame, setSaveGame] = useAtom(saveGameAtom);

	const [skills] = useAtom(skillsAtom);
	const [inventory] = useAtom(inventoryAtom);
	const [tickSpeed] = useAtom(tickSpeedAtom);
	const [money] = useAtom(moneyAtom);

	function saveFile() {
		return {
			skills: skills,
			inventory: inventory,
			tickSpeed: tickSpeed,
			money: money,
		};
	}

	// Save Game Loop - Make sure to use Web Workers for this later.
	useEffect(() => {
		const interval = setInterval(() => {
			setSaveGame(saveFile());
			console.log(saveGame);
		}, saveInterval);

		return () => clearInterval(interval);
	});

	return (
		<div className="app">
			<Nav />
			<Content />
		</div>
	);
}

export default App;
