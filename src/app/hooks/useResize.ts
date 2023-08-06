import { throttle } from "lodash";
import { useState, useEffect } from "react";
import { ResizeState, SCREEN } from "../../utils/constants/window_breakpoints";

export const useResize = (): ResizeState => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = throttle(() => {
			setWidth(window.innerWidth);
		}, 400);

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return {
		width,
		isScreenSm: width <= SCREEN.SM,
		isScreenMd: width <= SCREEN.MD,
		isScreenLg: width <= SCREEN.LG,
		isScreenXl: width <= SCREEN.XL,
		isScreenXxl: width <= SCREEN.XXL,
	};
};
