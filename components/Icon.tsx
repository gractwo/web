enum IconSet {
	Menu,
	Twitter,
	GitHub,
	YouTube,
	MessageSquare,
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
		case IconSet.GitHub:
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
					className="feather feather-github"
					{...props}
				>
					<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
				</svg>
			);
		case IconSet.YouTube:
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
					className="feather feather-youtube"
					{...props}
				>
					<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
					<polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
				</svg>
			);
		case IconSet.MessageSquare:
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
					className="feather feather-message-square"
					{...props}
				>
					<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
				</svg>
			);
	}
};

export { Icon, IconSet };
