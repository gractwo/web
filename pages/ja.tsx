import styles from "../styles/Ja.module.scss";
import { useUser } from "@auth0/nextjs-auth0/client";

const PageMe = () => {
	const { user, error, isLoading } = useUser();
	return (
		<>
			{isLoading && (
				<main>
					<h3>Ładujemy dane dla Ciebie...</h3>
					<p>Sit tight.</p>
				</main>
			)}
			{error && (
				<main>
					<h3>Wystąpił błąd.</h3>
					<p>Tyle wiemy.</p>
				</main>
			)}
			{!isLoading && !error && user && (
				<main>
					<div className={styles.header}>
						<img src={user.picture || ""} alt={`${user.name}'s picture`} />
						<h1>{user.name}</h1>
					</div>
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
