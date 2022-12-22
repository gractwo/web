import { useRouter } from "next/router";
import administracja from "../../../data/administracja.json";

const ProfilePage = () => {
	const router = useRouter();
	const profname = router.query.profname as string;
	if (
		administracja
			.map((el) => {
				return el.name.replaceAll(" ", "-").toLocaleLowerCase();
			})
			.includes(profname)
	) {
		const person = administracja.filter((wpis) => {
			return wpis.name.replaceAll(" ", "-").toLocaleLowerCase() === profname;
		})[0];
		return (
			<main>
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
						src={person.img}
						alt={`${person.name} profile image`}
						style={{
							width: "128px",
							aspectRatio: "1/1",
							objectFit: "cover",
							borderRadius: "50%",
						}}
					/>
					<div>
						<h1>{person.name}</h1>
						<p>{person.desc}</p>
					</div>
				</div>
				{person.profile?.bigdesc.map((el, index) => {
					return <p key={index}>{el || <br />}</p>;
				})}
			</main>
		);
	} else {
		return (
			<main>
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
};

export default ProfilePage;
