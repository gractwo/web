import styles from "./IndexGallery.module.scss";
import gallery from "../../data/gallery.json";
import Link from "next/link";

const IndexGallery = () => {
	return (
		<>
			<main>
				<h2>galeria zdjęć idących mocno</h2>
			</main>
			<main className={styles.gallerycontainer}>
				{gallery.map((entry) => {
					return (
						<Link
							key={entry.link}
							href={entry.link}
							className={styles.galleryimg}
						>
							<img src={entry.link} alt={entry.description} />
							<article>
								<h3>{entry.title}</h3>
								<p>{entry.meta}</p>
							</article>
						</Link>
					);
				})}
			</main>
		</>
	);
};

export { IndexGallery };
