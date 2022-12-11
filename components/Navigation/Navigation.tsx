import styles from "./Navigation.module.scss";
import { GractwoLogo } from "../Logo";
import Link from "next/link";

import navigation from "../../data/navigation.json";

const Navigation = () => {
	let username: string = "";
	return (
		<>
			<div className={styles.nav}>
				<GractwoLogo className={`${styles.logo} ${styles.desktop}`} />
				{navigation.map((navlink) => {
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
				<div tabIndex={0} className={`${styles.dropdown} ${styles.mobile}`}>
					<GractwoLogo width={48} height={48} />
					nawigacja
					{/* TUTAJ WSTAWIĆ IKONKĘ PÓŹNIEJ */}
					<div className={styles.innerdropdown}>
						{navigation.map((navlink) => {
							return (
								<Link
									key={`mobile${navlink.href}`}
									href={navlink.href}
									className={`${styles.link} ${styles.mobile}`}
								>
									{navlink.name}
								</Link>
							);
						})}
					</div>
				</div>
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

export { Navigation };
