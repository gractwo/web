import styles from "./IndexGallery.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

const IndexGallery = () => {
	type apiResType = {
		Id: string;
		Title: string;
		Link: string;
		Description?: string;
		Place?: string;
		Date?: string;
	};
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("https://gractwo.pl/api/v1/images")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setData(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<>
			<main>
				<h2>galeria zdjęć idących mocno</h2>
			</main>
			<main className={styles.gallerycontainer}>
				{data.map((el: apiResType) => {
					return (
						<Link key={el.Id} href={el.Link} className={styles.galleryimg}>
							<img src={el.Link} alt={el.Description || el.Title} />
							<article>
								<h3>{el.Title}</h3>
								<p>
									{el.Place || ""}
									{el.Place && el.Date ? ", " : ""}
									{el.Date
										? new Date(el.Date).getDate().toString().length == 2
											? new Date(el.Date).getDate()
											: "0" + new Date(el.Date).getDate()
										: ""}
									{"."}
									{el.Date
										? (new Date(el.Date).getMonth() + 1).toString().length == 2
											? new Date(el.Date).getMonth() + 1
											: "0" + (new Date(el.Date).getMonth() + 1)
										: ""}
									{"."}
									{el.Date ? new Date(el.Date).getFullYear() : ""}
								</p>
							</article>
						</Link>
					);
				})}
			</main>
		</>
	);
};

export { IndexGallery };
