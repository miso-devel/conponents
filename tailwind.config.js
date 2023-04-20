/** @type {import('tailwindcss').Config} */
import { LoadingAnimations } from './src/animations/Loading';
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				LoadBar: LoadingAnimations.keyframes.LoadBar,
			},
			animation: {
				LoadBar: LoadingAnimations.animation.LoadBar,
			},
			backgroundImage: {
				Loadbar: LoadingAnimations.backgroundImage.Loadbar,
			},
			backgroundSize: {
				LoadingSize: LoadingAnimations.backgroundSize.size,
			},
		},
	},
	plugins: [],
};
