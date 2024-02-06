import styles from "./IndexGallery.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

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
		fetch("https://gractwo.pl/api/v1/index-images")
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
	function redirect(
		Link: string
	): import("react").MouseEventHandler<HTMLImageElement> {
		return (event: React.MouseEvent<HTMLImageElement>) => {
			window.open(Link, "_blank");
		};
	}
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<>
			<main>
				<h2>galeria zdjęć idących mocno</h2>
			</main>
			<main>
				<ImageList variant="masonry" cols={isMobile ? 1 : 3} gap={8}>
					{data.map((el: apiResType) => (
						<>
							<ImageListItem key={el.Id}>
								<img
									src={el.Link}
									alt={el.Description || el.Title}
									loading="lazy"
									onClick={redirect(el.Link)}
									className={styles.image}
								></img>
								<ImageListItemBar
									title={el.Title}
									subtitle={el.Place}
								></ImageListItemBar>
							</ImageListItem>
						</>
					))}
				</ImageList>
			</main>
		</>
	);
};

export { IndexGallery };
