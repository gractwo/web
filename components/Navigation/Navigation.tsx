import styles from "./Navigation.module.scss";
import GractwoLogo from "../logo";
import Link from "next/link";

const PageNavigation = () => {
	let username: string = "";
	return (
		<>
			<div className={styles.nav}>
				<GractwoLogo className={styles.logo} />
				{/* <h1 className={styles.wordmark}>Gractwo!</h1> */}
				<Link href="/" className={styles.link}>
					główna
				</Link>
				<Link href="/o-gractwie" className={styles.link}>
					o gractwie
				</Link>
				<Link href="/cytaty" className={styles.link}>
					cytaty
				</Link>
				<Link href="/rankingi" className={styles.link}>
					rankingi
				</Link>
				<Link
					href="/"
					style={{ display: "flex" }}
					className={`${styles.link} ${styles.profile}`}
				>
					zaloguj się
				</Link>
				<Link
					href="/"
					style={{ display: "none" }}
					className={`${styles.link} ${styles.profile}`}
				>
					{username ? username : "twój profil"}
				</Link>
			</div>
		</>
	);
};

export default PageNavigation;
