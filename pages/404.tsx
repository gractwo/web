import { SEO } from "../components/SEO";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PageError404 = () => {
	const router = useRouter();
	const [badPath, setBadPath] = useState("");
	useEffect(() => {
		setBadPath(router.asPath);
	}, [router.asPath]);
	return (
		<>
			<SEO title="404" />
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					userSelect: "none",
				}}
			>
				<div
					style={{ textAlign: "center", position: "relative", width: "320px" }}
				>
					<h1 style={{ fontSize: "8rem", zIndex: -1 }}>404</h1>
					<p
						style={{
							position: "absolute",
							fontSize: "1.2rem",
							left: "174px",
							bottom: "36px",
							background: "var(--black0)",
							padding: "0 4px",
							borderTopLeftRadius: "4px",
						}}
					>
						ERROR
					</p>
				</div>
			</div>
			<p style={{ textAlign: "center", lineHeight: "1.5rem" }}>
				<span
					style={{
						padding: "4px",
						background: "var(--black1)",
						borderRadius: "4px",
						boxShadow: "var(--shadow0)",
					}}
				>
					{badPath}
				</span>{" "}
				nie jest poprawnym adresem.
			</p>
		</>
	);
};

export default PageError404;
