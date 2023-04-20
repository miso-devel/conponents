import { Typography } from './components/typography/Typography';
import { useState } from 'react';

function App() {
	const [_count, _setCount] = useState(0);

	return (
		<div className="App">
			<Typography elm={'h1'} text={'作ったコンポーネントを置いておくためだけのプロジェクトです'} />
		</div>
	);
}

export default App;
