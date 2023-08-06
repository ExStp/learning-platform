export interface ResizeState {
	width: number;
	isScreenSm: boolean;
	isScreenMd: boolean;
	isScreenLg: boolean;
	isScreenXl: boolean;
	isScreenXxl: boolean;
}

export const SCREEN = {
	SM: 576,
	MD: 768,
	LG: 992,
	XL: 1200,
	XXL: 1400,
};
