import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
		fetch("https://gractwo.pl/api/v1/admincards")
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
		return <main style={{ color: "grey" }}>Fetching data...</main>;
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
				<main>
					<SEO title={person.Name} />
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							gap: "1rem",
							marginBottom: "1rem",
						}}
					>
						<img
							src={person.Img}
							alt={`${person.Name} profile image`}
							style={{
								width: "128px",
								aspectRatio: "1/1",
								objectFit: "cover",
								borderRadius: "50%",
							}}
						/>
						<div>
							<h1>{person.Name}</h1>
							<p>{person.Desc}</p>
						</div>
					</div>
					{/* FOR LATER BIGDESC DATASET */}
					{/* {person.profile?.bigdesc.map((el, index) => {
						return <p key={index}>{el || <br />}</p>;
					})} */}
				</main>
			);
		} else {
			return (
				<main>
					<SEO title="nieznany profil" />
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
