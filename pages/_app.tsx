import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";
import { SEO } from "../components/SEO";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<SEO />
			<Navigation />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
