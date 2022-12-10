import styles from "../styles/Index.module.scss";

import { useEffect, useState } from "react";
import SEO from "../components/SEO";
import config from "../data/config.json";

const PageIndex = () => {
	const [splash, setSplash] = useState("");
	useEffect(() => {
		setSplash(
			config.splashes[Math.floor(Math.random() * config.splashes.length)].body
		);
	}, []);
	const welcometext: string =
		"Witamy na witrynie internetowej Gractwa. Mamy nadzieję że odnajdziesz czego szukasz, zbłąkana duszo.";
	return (
		<>
			<SEO />
			<div className={styles.hero}>
				<div className={styles.heroinside}>
					<h1>&bdquo;{splash || "..."}&rdquo;</h1>
					<p>{welcometext}</p>
					<br />
					<p>Warto naznaczyć, że strona jest w trakcie remontu.</p>
				</div>
			</div>
			<div className={styles.stats}>
				<h1>Hello!</h1>
				<p>This is the index test page.</p>
			</div>
		</>
	);
};

export default PageIndex;
