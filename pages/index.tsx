import styles from "../styles/Index.module.scss";
import { useEffect, useState } from "react";
import { SEO } from "../components/SEO";
import { Icon, IconSet } from "../components/Icon";
import splashes from "../data/splashes.json";
import Link from "next/link";
import { IndexGallery } from "../components/IndexGallery/IndexGallery";

const PageIndex = () => {
	const [splash, setSplash] = useState("");
	function randomizeSplash(): void {
		setSplash(splashes[Math.floor(Math.random() * splashes.length)].body);
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
			<main className={styles.chips}>
				<Link href="/discord" className={styles.chip}>
					discord <Icon icon={IconSet.Discord} />
				</Link>
				<Link href="/youtube" className={styles.chip}>
					youtube <Icon icon={IconSet.YouTube} />
				</Link>
				<Link href="/twitter" className={styles.chip}>
					twitter <Icon icon={IconSet.Twitter} />
				</Link>
				<Link href="/github" className={styles.chip}>
					github <Icon icon={IconSet.GitHub} />
				</Link>
			</main>
			<IndexGallery />
		</>
	);
};

export default PageIndex;
