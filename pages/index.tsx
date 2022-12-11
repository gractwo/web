import styles from "../styles/Index.module.scss";

import { useEffect, useState } from "react";
import { SEO } from "../components/SEO";
import config from "../data/config.json";

const PageIndex = () => {
	const [splash, setSplash] = useState("");
	function randomizeSplash(): void {
		setSplash(
			config.splashes[Math.floor(Math.random() * config.splashes.length)].body
		);
	}
	useEffect(() => {
		randomizeSplash();
	}, []);
	const welcometext: string = "Witamy na witrynie internetowej Gractwa."; // Mamy nadzieję że odnajdziesz czego szukasz, zbłąkana duszo.";
	return (
		<>
			<SEO />
			<div className={styles.hero}>
				<div className={styles.heroinside}>
					<h1
						onClick={randomizeSplash}
						className={styles.h1clicktorefreshsplash}
					>
						&bdquo;{splash || "..."}&rdquo;
					</h1>
					<p>{welcometext}</p>
					<br />
					<p>Warto naznaczyć, że strona jest w trakcie remontu.</p>
				</div>
			</div>
			<div className={styles.statscontainer}>
				<main className={styles.stats}>
					<article>
						<h1>~200</h1>
						<p>członków na discordzie</p>
					</article>
					<article>
						<h1>
							{Math.floor(
								(Date.now() - new Date("2020-07-06").getTime()) / 86400000
							)}
						</h1>
						<p>dni istnienia gractwa</p>
					</article>
					<article>
						<h1>dużo</h1>
						<p>wysłanych wiadomości</p>
					</article>
				</main>
			</div>
		</>
	);
};

export default PageIndex;
