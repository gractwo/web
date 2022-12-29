import styles from "../styles/Ja.module.scss";
import { useUser } from "@auth0/nextjs-auth0/client";

const PageMe = () => {
	const { user, isLoading } = useUser();
	return (
		<>
			{isLoading && (
				<main>
					<h3>Ładujemy dane dla Ciebie...</h3>
					<p>Sit tight.</p>
				</main>
			)}
			{!isLoading && user && (
				<main>
					<div className={styles.header}>
						<img src={user.picture || ""} alt={`${user.name}'s picture`} />
						<h1>{user.name}</h1>
					</div>
					{/* <p>
						mail: {user.email || "no mail"} <br />
						mail verified: {user.email_verified || "no mail verified"} <br />
						name: {user.name || "no name"} <br />
						nickname: {user.nickname || "no nickname"} <br />
						org id: {user.org_id || "no org id"} <br />
						picture: {user.picture || "no picture"} <br />
						sub: {user.sub || "no sub"} <br />
						updated at: {user.updated_at || "no updated at"}
					</p> */}
				</main>
			)}
			{!isLoading && !user && (
				<main>
					<h1>/ja</h1>
					<p>
						Musisz być zalogowany aby skorzystać z funkcjonalności tej strony.
					</p>
				</main>
			)}
		</>
	);
};

export default PageMe;
