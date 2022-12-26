import styles from "../styles/Index.module.scss";
import { useEffect, useState } from "react";
import { SEO } from "../components/SEO";
import { Icon } from "../components/Icon";
import Link from "next/link";
import { IndexGallery } from "../components/IndexGallery/IndexGallery";

const PageIndex = () => {
	const [splash, setSplash] = useState("");
	const [memberCount, setMemberCount] = useState("");
	function randomizeSplash(): void {
		fetch("https://gractwo.pl/api/v1/splash")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setSplash(data.Splash);
			})
			.catch((err) => {
				console.log(err);
			});
	}
	useEffect(() => {
		randomizeSplash();
		fetch("https://gractwo.pl/api/members")
			.then((res) => {
				return res.text();
			})
			.then((data) => {
				setMemberCount(data);
			})
			.catch((err) => {
				console.log(err);
			});
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
				</div>
			</div>
			<div className={styles.statscontainer}>
				<main className={styles.stats}>
					<article>
						<h1>{memberCount || "∞"}</h1>
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
			<main className="chips">
				<Link href="/discord" className="chip">
					discord <Icon icon="Discord" />
				</Link>
				<Link href="/youtube" className="chip">
					youtube <Icon icon="YouTube" />
				</Link>
				<Link href="/twitter" className="chip">
					twitter <Icon icon="Twitter" />
				</Link>
				<Link href="/github" className="chip">
					github <Icon icon="GitHub" />
				</Link>
			</main>
			<IndexGallery />
		</>
	);
};

export default PageIndex;
