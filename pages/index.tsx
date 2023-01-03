import styles from "../styles/Index.module.scss";
import { useEffect, useState } from "react";
import { SEO } from "../components/SEO";
import { Icon } from "../components/Icon";
import Link from "next/link";
import { IndexGallery } from "../components/IndexGallery/IndexGallery";

const PageIndex = () => {
	const [splash, setSplash] = useState("");
	const [memberCount, setMemberCount] = useState("");
	const [daysOfExistence, setDaysOfExistence] = useState("");
	const [sentMessages, setSentMessages] = useState("");
	const [welcomeText, setWelcomeText] = useState(
		"Witamy na witrynie internetowej Gractwa."
	);
	function randomizeSplash(): void {
		fetch("https://gractwo.pl/api/v1/splash")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setSplash(data.Splash);
			})
			.catch((err) => {
				setSplash("nie ma tu co zabezpieczać");
				setWelcomeText("splashtexty spadły z rowerka!");
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
				setMemberCount("∞");
				console.log(err);
			});
		setDaysOfExistence(
			Math.floor(
				(Date.now() - new Date("2020-07-06").getTime()) / 86400000
			).toString()
		);
		setSentMessages("dużo");
	}, []);
	useEffect(() => {
		if (!memberCount) return;
		if (!daysOfExistence) return;
		if (!sentMessages) return;
		if (document) {
			document
				.querySelectorAll(".statCont > article > h1")
				.forEach((el: Element) => {
					el.classList.add(styles.doneLoading);
				});
		}
	}, [memberCount, daysOfExistence, sentMessages]);
	useEffect(() => {
		if (!splash) return;
		if (document) {
			document.querySelector(".splashtext")?.classList.add(styles.doneLoading);
		}
	}, [splash]);
	return (
		<>
			<SEO />
			<div className={styles.hero}>
				<div className={styles.heroinside}>
					<h1
						onClick={randomizeSplash}
						className={`${styles.actualsplash} splashtext`}
					>
						&bdquo;{splash || "..."}&rdquo;
					</h1>
					<p>{welcomeText || "Witamy na witrynie internetowej Gractwa."}</p>
				</div>
			</div>
			<div className={styles.statscontainer}>
				<main className={`${styles.stats} statCont`}>
					<article>
						<h1>{memberCount || "invis placeholder"}</h1>
						<p>członków na discordzie</p>
					</article>
					<article>
						<h1>{daysOfExistence || "invis placeholder"}</h1>
						<p>dni istnienia gractwa</p>
					</article>
					<article>
						<h1>{sentMessages || "invis placeholder"}</h1>
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
