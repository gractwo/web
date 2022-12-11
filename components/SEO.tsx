import Head from "next/head";

type seoprops = {
	title?: string;
	noatsign?: boolean; // simply add "noatsign" as property to element
	description?: string;
};

const SEO = ({ title, noatsign, description }: seoprops) => {
	const defaultDescription = "Witryna internetowa Gractwa.";
	return (
		<Head>
			<title>
				{title ? `${title}${noatsign ? "" : " @ gractwo.pl"}` : "gractwo.pl"}
			</title>
			<link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
			<meta name="description" content={description || defaultDescription} />
		</Head>
	);
};

export { SEO };
