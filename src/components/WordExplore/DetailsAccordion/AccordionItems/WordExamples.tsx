import { Card, CircularProgress, Stack } from "@mui/joy";
import { wordsAPI } from "../../../../app/services/wordsAPI";
import { FC } from "react";
import { uniqueId } from "lodash";

interface IProps {
	word: string;
}

export const WordExamples: FC<IProps> = ({ word }) => {
	const { data, isFetching, isError } = wordsAPI.useFetchExamplesQuery(word);

	if (isError) return <p>Network error</p>;
	if (isFetching) return <CircularProgress />;
	if (data?.examples.length) {
		return (
			<Stack spacing={1} direction={{ xs: "column", sm: "row" }} useFlexGap flexWrap="wrap">
				{data?.examples.map((example) => (
					<Card key={uniqueId()}>{example}</Card>
				))}
			</Stack>
		);
	} else {
		return <p>no data</p>;
	}
};
