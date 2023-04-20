export const LoadingAnimations = {
	keyframes: {
		LoadBar: {
			from: { 'background-position': '0px 0px' },
			to: { 'background-position': '-20px 0px' },
		},
	},
	animation: {
		LoadBar: 'LoadBar 0.8s infinite linear',
	},
	backgroundImage: {
		Loadbar:
			'linear-gradient(-60deg, transparent 0%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)',
	},
	backgroundSize: {
		size: '20px 30px',
	},
};
