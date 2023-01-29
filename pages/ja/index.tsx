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
	type badgeSchema = {
		Id: string; // ID
		Name: string; // badge name
		Desc: string; // badge description (short)
		Expl?: string; // badge explanation (long)
		Img?: string; // direct url to an image
		Date?: string; // datetime w/ timezone (eg: "2022-02-25T10:23:54Z")
	};
	const [personsData, setPersonsData] = useState<personsSchema | null>(null);
	const [badgesData, setBadgesData] = useState<badgeSchema[] | null>(null);

	useEffect(() => {
		if (!user) return;
		fetch("https://gractwo.pl/api/v1/persons-of-note")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setPersonsData(
					data.filter((el: personsSchema) => {
						return el.AssignedUser === user.sub?.replace("oauth2|discord|", "");
					})[0]
				);
			});
		fetch(
			`https://gractwo.pl/api/v1/badges/${user.sub?.replace(
				"oauth2|discord|",
				""
			)}`
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setBadgesData(data);
			});
	}, [user]);

	return (
		<>
			<SEO title="twój profil" dontindex />
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
							badges: badgesData || undefined,
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
