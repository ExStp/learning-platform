export interface IPaletteColors {
	[key: string]: string;
}

interface Palette {
	background?: {
		body?: string;
	};
	primary?: IPaletteColors;
	neutral?: IPaletteColors;
	// Другие свойства палитры, если есть
}

// Тип для цветовой схемы
interface ColorScheme {
	palette: Palette;
}

// Тип для компонента с переопределенными стилями
interface ComponentStyleOverrides {
	[key: string]: {
		styleOverrides: {
			root?: {
				boxShadow?: string;
			};
			// Другие переопределенные стили, если есть
		};
		defaultProps?: object;
	};
}

export interface ITheme {
	colorSchemes: {
		light: ColorScheme;
		dark: ColorScheme;
	};
	components: ComponentStyleOverrides;
	fontFamily: {
		display: string;
		body: string;
		// Другие шрифты, если есть
	};
}
