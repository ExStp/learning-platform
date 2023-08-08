import { Card, CircularProgress, Stack } from "@mui/joy";
import { wordsAPI } from "../../../../app/services/wordsAPI";
import { FC } from "react";
import { uniqueId } from "lodash";

interface IProps {
	word: string;
}

export const WordSynonyms: FC<IProps> = ({ word }) => {
	const { data, isFetching, isError } = wordsAPI.useFetchSynonymsQuery(word);

	if (isError) return <p>Network error</p>;
	if (isFetching) return <CircularProgress />;
	if (data?.synonyms.length) {
		return (
			<Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
				{data?.synonyms.map((synonym) => (
					<Card key={uniqueId()}>{synonym}</Card>
				))}
			</Stack>
		);
	} else {
		return <p>no data</p>;
	}
};
