import Head from "next/head";

type seoprops = {
	title?: string;
	noatsign?: boolean; // simply add "noatsign" as property to element
	description?: string;
};

const SEO = ({ title, noatsign, description }: seoprops) => {
	const titleEnhanced = title
		? `${title}${noatsign ? "" : " @ gractwo.pl"}`
		: "Gractwo!";
	const defaultDescription = `Gractwo jest nieformalną organizacją i społecznością osób zainteresowanych grami, anime, popkulturą.
		Powstałe w 2020 roku jest zrzeszeniem ludzi w dużej mierze znających się nawzajem i spędzających razem „na Gractwie” czas.`;
	const remoteLogoRender =
		"https://raw.githubusercontent.com/gractwo/assets/master/raster/logo-x192.png";
	return (
		<Head>
			<title>{titleEnhanced}</title>
			<link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
			<meta name="description" content={description || defaultDescription} />

			<meta name="theme-color" content="#fb636b" />

			<meta property="og:title" content={titleEnhanced} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://gractwo.pl" />
			<meta property="og:image" content={remoteLogoRender} />
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
