import { Card, CircularProgress, Stack } from "@mui/joy";
import { wordsAPI } from "../../../../app/services/wordsAPI";
import { FC } from "react";
import { uniqueId } from "lodash";

interface IProps {
	word: string;
}

export const WordAntonyms: FC<IProps> = ({ word }) => {
	const { data, isFetching, isError } = wordsAPI.useFetchAntonymsQuery(word);

	if (isError) return <p>Network error</p>;
	if (isFetching) return <CircularProgress />;
	if (data?.antonyms.length) {
		return (
			<Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
				{data?.antonyms.map((antonym) => (
					<Card key={uniqueId()}>{antonym}</Card>
				))}
			</Stack>
		);
	} else {
		return <p>no data</p>;
	}
};
