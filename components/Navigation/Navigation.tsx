import styles from "./Navigation.module.scss";
import { GractwoLogo } from "../Logo";
import { Icon } from "../Icon";

import navigation from "../../data/navigation.json";
import Link from "next/link";

import { useUser } from "@auth0/nextjs-auth0/client";

const Navigation = () => {
	const { user, isLoading } = useUser();
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
				{isLoading && (
					<>
						<Link href="/" className={`${styles.link} ${styles.profile}`}>
							fetching danych...
						</Link>
					</>
				)}
				{!isLoading && user && (
					<>
						<Link href="/ja" className={`${styles.link} ${styles.profile}`}>
							{user.picture && (
								<img
									src={user.picture}
									alt={`${user.name}'s profile picture`}
								/>
							)}
							{!user.picture && <Icon icon="User" />}
							{user.nickname}
						</Link>
						<Link
							href="/api/auth/logout"
							className={`${styles.link} ${styles.partprofile}`}
						>
							<Icon icon="LogOut" />
						</Link>
					</>
				)}
				{!isLoading && !user && (
					<Link
						href="/api/auth/login"
						style={{ marginLeft: "auto" }}
						className={`${styles.link} ${styles.partprofile}`}
					>
						zaloguj się
						<Icon icon="LogIn" />
					</Link>
				)}
			</div>
		</>
	);
};

export { Navigation };
