import { CircularProgress } from "@mui/joy";
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
	if (data) {
		return (
			<ul>
				{data?.synonyms.map((synonym) => (
					<li key={uniqueId()}>{synonym}</li>
				))}
			</ul>
		);
	}
};
