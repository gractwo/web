import { GractwoLogo } from "../components/Logo";
import { SEO } from "../components/SEO";
import styles from "../styles/oGractwie.module.scss";
import Link from "next/link";
import { Icon } from "../components/Icon";
import { iconselection } from "../components/Icon";
import links from "../data/links.json";
import { useEffect, useState } from "react";

const PageInfo = () => {
	const [adminList, setAdminList] = useState([]);
	type apiResType = {
		Id: string;
		Name: string;
		Desc: string;
		Img: string;
		DevBadge: string;
		AssignedUser: string;
	};
	useEffect(() => {
		fetch("https://gractwo.pl/api/v1/admincards")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setAdminList(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<>
			<SEO title="o gractwie" />
			<main>
				<div className={styles.biglogocontainer}>
					<GractwoLogo />
					<article>
						<h1>
							<GractwoLogo />
							Gractwo
						</h1>
						<p style={{ textAlign: "justify" }}>
							Gractwo jest nieformalną organizacją i społecznością osób
							zainteresowanych grami, anime, popkulturą. Powstałe w 2020 roku
							jest zreszeniem ludzi w dużej mierze znających się nawzajem i
							spędzających razem „na Gractwie” czas.
							{/* Genezą nazwy jest złączenie słów „Gracz” i „Bractwo”. */}
							{/*  */}
							{/* discordowa społeczność kryptogenshinowa która jest yyy często
							charakteryzuje się łączeniem przez relacje interpersonalne
							kluczowych członków, chyba że jeszcze bardziej chcemy ukrywać
							naszą kryptogenshinowość */}
							{/* THANKS, MOLLIN */}
						</p>
					</article>
				</div>
				<div className="chips">
					<Link href="#sklad-administracji" className="chip">
						skład administracji
						<Icon icon="Users" />
					</Link>
					<Link href="#linki" className="chip">
						linki i przekierowania
						<Icon icon="Link2" />
					</Link>
				</div>
			</main>
			<main id="sklad-administracji">
				<h2>skład administracji</h2>
				<div className={styles.persons}>
					{adminList.map((el: apiResType) => {
						return (
							<Link
								key={el.Id}
								href={`/profil/${el.Name.replaceAll(
									" ",
									"-"
								).toLocaleLowerCase()}`}
							>
								<article>
									<img src={el.Img} alt={`zdjęcie profilowe ${el.Name}`} />
									<div>
										<h3>{el.Name}</h3>
										<p>{el.Desc || "brak opisu."}</p>
										{el.DevBadge ? (
											<span className={styles.devBadge}>DEV</span>
										) : (
											""
										)}
									</div>
								</article>
							</Link>
						);
					})}
				</div>
			</main>
			<main id="linki">
				<h2>linki i przekierowania</h2>
				<div className="chips">
					{links.map((el) => {
						if (el.name) {
							return (
								<Link className="chip" key={el.name} href={el.href}>
									{el.name}
									{el.icon ? <Icon icon={el.icon as iconselection} /> : ""}
								</Link>
							);
						}
					})}
				</div>
			</main>
		</>
	);
};

export default PageInfo;
