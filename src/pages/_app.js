import { Roboto_Mono } from 'next/font/google';

import '@/styles/globals.scss';

const roboto_mono = Roboto_Mono({
	weight: ['300', '600'],
	subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
	return (
		<main className={roboto_mono.className}>
			<Component {...pageProps} />
		</main>
	);
}
