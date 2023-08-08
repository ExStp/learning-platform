import { Button, Divider, Stack, Typography } from "@mui/joy";
import { FC, useState } from "react";
import { IResult, IWordExplore } from "../../app/interfaces/IWordExplore";
import { WordDefinitionCard } from "./WordCard/WordDefinitionCard";
import { uniqueId } from "lodash";

interface IProps {
	data: IWordExplore;
}

const dataLessLength: number = 5;

export const WordInfo: FC<IProps> = ({ data }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const dataToShow = isExpanded ? data.results : data.results.slice(0, dataLessLength);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<Stack spacing={4}>
			<Stack spacing={2}>
				<Typography level="h3" textAlign="center">
					{data?.word ?? null}
				</Typography>
				<Typography level="body1" textAlign="center">
					{data?.pronunciation?.all ?? null}
				</Typography>
			</Stack>
			<Stack spacing={2}>
				{dataToShow.map((result: IResult) => (
					<WordDefinitionCard result={result} key={uniqueId()} />
				))}
			</Stack>
			{data.results.length > dataLessLength ? (
				<Divider>
					<Button onClick={toggleExpand}>{isExpanded ? "show less" : "show more"}</Button>
				</Divider>
			) : null}
		</Stack>
	);
};
