import React from "react";
import { createRoot } from "react-dom/client";

import CardBox from "./components/CardBox";
import SwitchTheme from "./components/SwitchTheme";

import "./index.css";

createRoot(document.getElementById("root")).render(
	<>
		<CardBox />
		<SwitchTheme />
	</>
);
