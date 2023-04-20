import { Button } from "./components/atoms/button/Button";
import { useState } from "react";

function App() {
	const [_count, _setCount] = useState(0);

	return (
		<div className="App">
			作ったコンポーネントを置いておくためだけのプロジェクトです
			<Button text={"aaaaa"} onClick={() => {}} />
		</div>
	);
}

export default App;
