import React, { useState, useEffect } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";

export default function SwitchTheme() {
	const [theme, setTheme] = useState("dark");

	function switchTheme() {
		setTheme(theme === "dark" ? "light" : "dark");
	}

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	return (
		<div className="fixed bottom-7 right-7">
			<button
				onClick={switchTheme}
				className="grid h-12 w-12 place-items-center rounded-full bg-black text-white dark:bg-white dark:text-black"
			>
				{theme === "dark" ? (
					<MdNightlight className="text-2xl" />
				) : (
					<MdLightMode className="text-2xl" />
				)}
			</button>
		</div>
	);
}
