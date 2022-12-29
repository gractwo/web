import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";
import { SEO } from "../components/SEO";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<UserProvider>
				<SEO />
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						minHeight: "100vh",
					}}
				>
					<div>
						<Navigation />
						<Component {...pageProps} />
					</div>
					<div>
						<Footer />
					</div>
				</div>
			</UserProvider>
		</>
	);
}
