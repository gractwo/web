import styles from "./ProfileCard.module.scss";

type UserProfileCardProps = {
	username: string;
	description?: string;
	picture?: string | null;
	isAdmin?: boolean;
	isDeveloper?: boolean;
	experience?: {
		level: number;
		tilNextLevel?: number;
		looseXP?: number;
	};
	badges?: {
		badgeName: string;
		badgeDesc?: string;
		badgeMerit?: string;
		badgeImage?: string;
	}[];
	accentColor?: string;
};

const ProfileCard = (user: UserProfileCardProps) => {
	return (
		<>
			<div className={styles.profile}>
				<article>
					<img
						src={user.picture || "https://placewaifu.com/image/128"}
						alt={user.username}
					/>
					<div className={styles.inner}>
						<header>
							<h1>{user.username}</h1>
							<p>
								{user.experience?.level && (
									<>
										{"LVL "}
										<span>{user.experience.level}</span>
									</>
								)}
							</p>
						</header>
						<p>{user.description}</p>
						<div className={styles.badges}>
							{user.isAdmin && (
								<div className={styles.badge}>
									<div
										className={styles.dot}
										style={{ background: user.accentColor }}
									/>
									Admin
								</div>
							)}
							{user.isDeveloper && (
								<div className={styles.badge}>
									<div
										className={styles.dot}
										style={{ background: user.accentColor }}
									/>
									DEV
								</div>
							)}
						</div>
					</div>
				</article>
				{user.experience?.looseXP && user.experience.tilNextLevel && (
					<div className={styles.xpinfo}>
						<p>XP: {user.experience.looseXP}</p>
						<p>XP until next level: {user.experience.tilNextLevel} </p>
					</div>
				)}
				{user.experience?.looseXP && user.experience.tilNextLevel && (
					<div className={styles.xpbar}>
						<div
							className={styles.xpinner}
							style={{
								background: user.accentColor,
								width:
									(
										(user.experience.looseXP /
											(user.experience.looseXP +
												user.experience.tilNextLevel)) *
										100
									).toString() + "%",
							}}
						/>
					</div>
				)}
				<footer>
					{user.badges
						?.slice(0, 1)
						.map(
							(el: {
								badgeName: string;
								badgeDesc?: string;
								badgeMerit?: string;
								badgeImage?: string;
							}) => {
								return (
									<section key={el.badgeName}>
										<h3>{el.badgeName}</h3>
										<p>{el.badgeDesc}</p>
									</section>
								);
							}
						)}
				</footer>
			</div>
		</>
	);
};

export { ProfileCard };
