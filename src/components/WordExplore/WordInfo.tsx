import { Box, Stack, Typography } from "@mui/joy";
import { FC } from "react";
import { IResult, IWordExplore } from "../../app/interfaces/IWordExplore";
import { WordDefinitionCard } from "./WordCard/WordDefinitionCard";
import { uniqueId } from "lodash";

interface IProps {
	data: IWordExplore;
}

export const WordInfo: FC<IProps> = ({ data }) => {
	return (
		<Box>
			<Stack spacing={2}>
				<Typography level="h3" textAlign="center">
					{data?.word ?? null}
				</Typography>
				<Typography level="body1" textAlign="center">
					{data?.pronunciation?.all ?? null}
				</Typography>
			</Stack>
			<Stack spacing={2} mt={4}>
				{data.results.map((result: IResult) => (
					<WordDefinitionCard result={result} key={uniqueId()} />
				))}
			</Stack>
		</Box>
	);
};
