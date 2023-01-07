import Head from "next/head";
import logo from "../public/logo.svg";

type seoprops = {
	title?: string;
	noatsign?: boolean; // simply add "noatsign" as property to element
	description?: string;
};

const SEO = ({ title, noatsign, description }: seoprops) => {
	const defaultDescription = "Witryna internetowa Gractwa.";
	const titleEnhanced = title
		? `${title}${noatsign ? "" : " @ gractwo.pl"}`
		: "gractwo.pl";
	return (
		<Head>
			<title>{titleEnhanced}</title>
			<link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
			<meta name="description" content={description || defaultDescription} />

			<meta name="theme-color" content="#fb636b" />

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://gractwo.pl" />
			<meta property="og:title" content={titleEnhanced} />
			<meta property="og:image" content={logo} />
			<meta property="og:site_name" content="gractwo.pl" />
			<meta
				property="og:description"
				content={description || defaultDescription}
			/>

			<meta name="robots" content="index, follow" />
			<meta name="googlebot" content="index, follow" />
		</Head>
	);
};

export { SEO };
