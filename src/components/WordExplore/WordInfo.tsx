import { Box, Typography } from "@mui/joy";
import { FC } from "react";
import { IWordExplore } from "../../app/interfaces/IWordExplore";

interface IProps {
	data: IWordExplore;
}

export const WordInfo: FC<IProps> = ({ data }) => {
	return (
		<Box>
			<Typography level="h3" textAlign="center">
				{data?.word ?? "unknown word"}
			</Typography>
		</Box>
	);
};
