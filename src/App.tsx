import { useState } from "react";

export const App = () => {
	const [title, setTitle] = useState("react");

	return (
		<button
			type="button"
			onClick={() => {
				setTitle(title.repeat(2));
			}}
		>
			{title}
		</button>
	);
};
