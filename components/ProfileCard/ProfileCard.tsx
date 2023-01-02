import styles from "./ProfileCard.module.scss";

type UserProfileCardProps = {
	data: {
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
};

const ProfileCard = ({ data }: UserProfileCardProps) => {
	return (
		<>
			<div className={styles.profile}>
				<article>
					<img
						src={data.picture || "https://placewaifu.com/image/128"}
						alt={data.username}
					/>
					<div className={styles.inner}>
						<header>
							<h1>{data.username}</h1>
							<p>
								{data.experience?.level && (
									<>
										{"LVL "}
										<span>{data.experience.level}</span>
									</>
								)}
							</p>
						</header>
						<p>{data.description}</p>
						<div className={styles.badges}>
							{data.isAdmin && (
								<div className={styles.badge}>
									<div
										className={styles.dot}
										style={{ background: data.accentColor }}
									/>
									Admin
								</div>
							)}
							{data.isDeveloper && (
								<div className={styles.badge}>
									<div
										className={styles.dot}
										style={{ background: data.accentColor }}
									/>
									Developer
								</div>
							)}
						</div>
					</div>
				</article>
				{data.experience?.looseXP && data.experience.tilNextLevel && (
					<div className={styles.xpinfo}>
						<p>XP: {data.experience.looseXP}</p>
						<p>XP until next level: {data.experience.tilNextLevel} </p>
					</div>
				)}
				{data.experience?.looseXP && data.experience.tilNextLevel && (
					<div className={styles.xpbar}>
						<div
							className={styles.xpinner}
							style={{
								background: data.accentColor,
								width:
									(
										(data.experience.looseXP /
											(data.experience.looseXP +
												data.experience.tilNextLevel)) *
										100
									).toString() + "%",
							}}
						/>
					</div>
				)}
				<footer>
					{data.badges
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
