import { Box, Stack, Typography } from "@mui/joy";
import { FC } from "react";
import { IResult, IWordExplore } from "../../app/interfaces/IWordExplore";
import { WordDefinitionCard } from "./WordDefinitionCard";
import { uniqueId } from "lodash";

interface IProps {
	data: IWordExplore;
}

export const WordInfo: FC<IProps> = ({ data }) => {
	console.log(data);
	return (
		<Box>
			<Typography level="h3" textAlign="center">
				{data?.word ?? "unknown word"}
			</Typography>
			<Stack spacing={2} mt={4}>
				{data.results.map((result: IResult) => (
					<WordDefinitionCard result={result} key={uniqueId()} />
				))}
			</Stack>
		</Box>
	);
};
