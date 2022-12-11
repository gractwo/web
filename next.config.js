const links = require("./data/links.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async redirects() {
		return links
			.filter((link) => !!link.hrefalias)
			.map((link) =>
				link.hrefalias.map((source) => ({
					source,
					destination: link.href,
					permanent: false,
				}))
			)
			.flat();
	},
};

module.exports = nextConfig;
