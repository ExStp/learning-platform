export const defaultTheme = {
	colorSchemes: {
		light: {
			palette: {
				background: {
					body: "var(--joy-palette-neutral-50)",
				},
				primary: {
					"50": "#fafaf9",
					"100": "#f5f5f4",
					"200": "#e7e5e4",
					"300": "#d6d3d1",
					"400": "#a8a29e",
					"500": "#78716c",
					"600": "#57534e",
					"700": "#44403c",
					"800": "#292524",
					"900": "#1c1917",
				},
			},
		},
		dark: {
			palette: {
				neutral: {
					outlinedBorder: "var(--joy-palette-neutral-700)",
				},
				primary: {
					"50": "#ede7f6",
					"100": "#d1c4e9",
					"200": "#b39ddb",
					"300": "#9575cd",
					"400": "#7e57c2",
					"500": "#673ab7",
					"600": "#5e35b1",
					"700": "#512da8",
					"800": "#4527a0",
					"900": "#311b92",
				},
			},
		},
	},
	components: {
		JoyAutocomplete: {
			styleOverrides: {
				root: {
					boxShadow: "var(--joy-shadow-xs)",
				},
			},
		},
		JoyButton: {
			styleOverrides: {
				root: {
					boxShadow: "var(--joy-shadow-xs)",
				},
			},
		},
		JoyInput: {
			styleOverrides: {
				root: {
					boxShadow: "var(--joy-shadow-xs)",
				},
			},
		},
		JoyTextarea: {
			styleOverrides: {
				root: {
					boxShadow: "var(--joy-shadow-xs)",
				},
			},
		},
		JoySelect: {
			styleOverrides: {
				root: {
					boxShadow: "var(--joy-shadow-xs)",
				},
			},
		},
	},
	fontFamily: {
		display: "'Inter', var(--joy-fontFamily-fallback)",
		body: "'Inter', var(--joy-fontFamily-fallback)",
	},
};
