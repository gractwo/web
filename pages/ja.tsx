import { useUser } from "@auth0/nextjs-auth0/client";
import { ProfileCard } from "../components/ProfileCard/ProfileCard";

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
					<ProfileCard
						username={user.name || "unknown user"}
						picture={user.picture}
						description={"To Ty! Niezaprzeczalnie. ヽ(*・ω・)ﾉ"}
						experience={{ level: 69, looseXP: 420, tilNextLevel: 270 }}
						badges={[
							{
								badgeName: "Odkrywca internetowy",
								badgeDesc: "Zalogowałeś się na stronę internetową gractwa.",
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
						]}
						isAdmin
						isDeveloper
					/>
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
