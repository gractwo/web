import styles from "./Navigation.module.scss";
import { GractwoLogo } from "../Logo";
import { Icon } from "../Icon";

import navigation from "../../data/navigation.json";
import Link from "next/link";

const Navigation = () => {
	let username: string = "";
	return (
		<>
			<div className={styles.nav}>
				<GractwoLogo
					width={96}
					className={`${styles.logo} ${styles.desktop}`}
				/>
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
					<Icon icon="Menu" />
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
				<a
					href="/api/auth/login"
					style={{ display: "flex" }}
					className={`${styles.link} ${styles.profile}`}
				>
					zaloguj się
				</a>
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
