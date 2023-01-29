import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProfileCard } from "../../../components/ProfileCard/ProfileCard";
import { SEO } from "../../../components/SEO";

const ProfilePage = () => {
	const router = useRouter();
	const profname = router.query.profname as string;
	type personsSchema = {
		Id: string;
		Name: string;
		Desc?: string;
		Img?: string;
		IsAdmin?: boolean;
		DevBadge?: boolean;
		AssignedUser?: string;
	};
	const [persons, setPersons] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch("https://gractwo.pl/api/v1/persons-of-note")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setPersons(data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	if (loading) {
		return (
			<>
				<SEO dontindex />
				<main style={{ color: "grey" }}>Fetching data...</main>
			</>
		);
	} else {
		if (
			persons
				.map((el: personsSchema) => {
					return el.Name.replaceAll(" ", "-").toLocaleLowerCase();
				})
				.includes(profname)
		) {
			const person: personsSchema = persons.filter((wpis: personsSchema) => {
				return wpis.Name.replaceAll(" ", "-").toLocaleLowerCase() === profname;
			})[0];
			return (
				<>
					<SEO
						title={person.Name}
						description={person.Desc}
						picture={person.Img}
					/>
					<main>
						<ProfileCard
							data={{
								username: person.Name,
								picture: person.Img,
								description: person.Desc,
								isAdmin: person.IsAdmin,
								isDeveloper: person.DevBadge,
								// accentColor: "violet",
								// experience: {
								// level: 69,
								// looseXP: 420,
								// tilNextLevel: 69,
								// },
								badges: [],
							}}
						/>
					</main>
				</>
			);
		} else {
			return (
				<main>
					<SEO title="nieznany profil" dontindex />
					<h1>Sorki!{" :("}</h1>
					<p style={{ lineHeight: "30px" }}>
						Sprawdź pisownię:
						<span
							style={{
								background: "var(--black1)",
								boxShadow: "var(--shadow0)",
								padding: "8px",
								margin: "10px",
								borderRadius: "4px",
							}}
						>
							{`/profile/${profname}`}
						</span>
						nie jest poprawnym lokatorem profilu.
					</p>
				</main>
			);
		}
	}
};

export default ProfilePage;
