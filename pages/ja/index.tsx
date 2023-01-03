import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import { SEO } from "../../components/SEO";

const PageMe = () => {
	const { user, error, isLoading } = useUser();
	type personsSchema = {
		Id: string;
		Name: string;
		Desc?: string;
		Img?: string;
		IsAdmin?: boolean;
		DevBadge?: boolean;
		AssignedUser?: string;
	};
	const [personsData, setPersonsData] = useState<personsSchema | null>(null);

	useEffect(() => {
		if (!user) return;
		fetch("https://gractwo.pl/api/v1/persons-of-note")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setPersonsData(
					data.filter((el: personsSchema) => {
						if (!user) return false;
						return el.AssignedUser === user.sub?.replace("oauth2|discord|", "");
					})[0]
				);
			});
	}, [user]);

	return (
		<>
			{isLoading && (
				<main>
					<h3>Ładujemy dane dla Ciebie...</h3>
					<p>Sit tight.</p>
				</main>
			)}
			{!isLoading && error && (
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
							description: personsData?.Desc || "twój opis.",
							isAdmin: personsData?.IsAdmin,
							isDeveloper: personsData?.DevBadge,
							// isAdmin: true,
							// experience: {
							// 	level: 69,
							// 	looseXP: 420,
							// 	tilNextLevel: 69,
							// },
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
						<button style={{ width: "100%", margin: 0, marginBottom: "12px" }}>
							Ustawienia Konta
						</button>
					</Link>
					{/* <Link href="/ja/ustawienia-profilu-publicznego">
						<button style={{ width: "100%", margin: 0, marginBottom: "12px" }}>
							Ustawienia Profilu Publicznego
						</button>
					</Link> */}
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
