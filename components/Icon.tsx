enum IconSet {
	Menu,
	Twitter,
}

type iconprops = {
	icon: IconSet;
	width?: number;
	height?: number;
} & React.SVGProps<SVGSVGElement>;

const Icon = ({ icon, width, height, ...props }: iconprops) => {
	switch (icon) {
		// guide for adding these:
		// - add {width || ogWidth}
		// - add {height || ogHeight}
		// - add {...props}
		case IconSet.Menu:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={width || 24}
					height={height || 24}
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="feather feather-menu"
					{...props}
				>
					<line x1="3" y1="12" x2="21" y2="12" />
					<line x1="3" y1="6" x2="21" y2="6" />
					<line x1="3" y1="18" x2="21" y2="18" />
				</svg>
			);
			break;
		case IconSet.Twitter:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={width || 24}
					height={height || 24}
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="feather feather-twitter"
					{...props}
				>
					<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
				</svg>
			);
			break;
	}
};

export { Icon, IconSet };
