import { useUser } from "@auth0/nextjs-auth0/client";
import { SEO } from "../../components/SEO";
import styles from "../../styles/ustawienia.module.scss";

const PageMeSettings = () => {
	const { user, error, isLoading } = useUser();

	return (
		<>
			<SEO dontindex title="ustawienia konta" />
			{isLoading && (
				<>
					<main>
						<h3>Ładowanie danych...</h3>
					</main>
				</>
			)}
			{!isLoading && error && (
				<main>
					<h3>Wystąpił błąd.</h3>
					<p>Tyle wiemy.</p>
				</main>
			)}
			{!isLoading && !error && user && (
				<>
					<main>
						<SEO title="ustawienia konta" />
						<h1>ustawienia konta</h1>
						<p>
							Kolor akcentowy <input type="color" name="" id="" />
						</p>
					</main>
					<main>
						<h3>uwaga: strona w trakcie budowy. funkcjonalność niegotowa.</h3>
						<button>Zapisz zmiany</button>
					</main>
				</>
			)}
		</>
	);
};

export default PageMeSettings;
