import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import { SEO } from "../../components/SEO";

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
					<p>Tyle wiemy:</p>
					<p>{error.name}</p>
					<p>{error.message}</p>
				</main>
			)}
			{!isLoading && !error && user && (
				<main>
					<SEO title="twój profil" />
					<ProfileCard
						data={{
							username: user.name || "unknown user",
							picture: user.picture,
							description: "Twój opis. ヽ(*・ω・)ﾉ",
							isAdmin: true,
							isDeveloper: true,
							experience: {
								level: 69,
								looseXP: 420,
								tilNextLevel: 69,
							},
							badges: [
								{
									badgeName: "Odkrywca internetowy",
									badgeDesc:
										"Logowanie się na gractwo.pl nie jest takie straszne.",
								},
								{
									badgeName: "Technik Informatyk",
									badgeDesc: "Łapanki na korytarzu to normalka.",
								},
								{
									badgeName: "Rozpad PGTF",
									badgeDesc: "Służba w oddziałach Super Pizzy - powód do dumy.",
								},
								{
									badgeName: "Mollin Stream",
									badgeDesc: "„Sorry, ja za bardzo nie pamietam.” ~ Mollin",
								},
								{
									badgeName: "Alkoholik",
									badgeDesc: "pracoholicy gdy skończy im się pracohol:",
								},
								{
									badgeName: "Studnia Oneshot",
									badgeDesc: "elf w studni - ciekawe jak stamtąd wyjdzie",
								},
								{
									badgeName: "RemCon 2022",
									badgeDesc: "pomorze konwent",
								},
							],
						}}
					/>
					<Link href="/ja/ustawienia">
						<button style={{ width: "100%", margin: 0 }}>
							Ustawienia Konta
						</button>
					</Link>
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