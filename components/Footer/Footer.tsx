import Link from "next/link";

const Footer = () => {
	return (
		<div style={{ textAlign: "center", padding: "1rem 0" }}>
			<p>
				&copy; Gractwo 2020-{new Date().getFullYear()}
				<span style={{ color: "#666" }}>
					{" | "}open-source on{" "}
					<Link href="/oss" style={{ color: "inherit" }}>
						github
					</Link>
				</span>
			</p>
		</div>
	);
};

export { Footer };
