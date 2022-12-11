import styles from "./Navigation.module.scss";
import GractwoLogo from "../logo";
import Link from "next/link";

import config from "../../data/config.json";

const PageNavigation = () => {
	let username: string = "";
	return (
		<>
			<div className={styles.nav}>
				<GractwoLogo className={`${styles.logo} ${styles.desktop}`} />
				{/* <GractwoLogo
					width={48}
					height={48}
					className={`${styles.logo} ${styles.mobile}`}
				/> */}
				{config.navigation.map((navlink) => {
					return (
						<Link
							key={`desktop${navlink.href}`}
							href={navlink.href}
							className={`${styles.link} ${styles.desktop}`}
						>
							{navlink.name}
						</Link>
					);
				})}
				<Link
					href=""
					style={{ display: "flex" }}
					className={`${styles.link} ${styles.profile}`}
				>
					zaloguj się
				</Link>
				<Link
					href=""
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
