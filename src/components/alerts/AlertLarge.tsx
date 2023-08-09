import { FC } from "react";
import { AlertLargeNetworkError } from "./AlertLargeTypes/AlertLargeNetworkError";

interface IProps {
	type: "networkError";
	sx?: {
		[key: string]: string;
	};
}

export const AlertLarge: FC<IProps> = ({ type, sx }) => {
	switch (type) {
		case "networkError":
			return <AlertLargeNetworkError sx={sx} />;
		default:
			return null;
	}
};
