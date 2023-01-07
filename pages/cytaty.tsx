import { SEO } from "../components/SEO";

const PageCytaty = () => {
	const SEOdesc = `Strona w trakcie budowy - zbiorowisko cytatów użytkowników gractwa!`;
	return (
		<>
			<SEO title="cytaty" description={SEOdesc} />
			<main>Miejsce na stronkę od cytatów.</main>
		</>
	);
};

export default PageCytaty;
