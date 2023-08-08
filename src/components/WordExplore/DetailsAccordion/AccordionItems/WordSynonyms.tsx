import { CircularProgress } from "@mui/joy";
import { wordsAPI } from "../../../../app/services/wordsAPI";
import { FC } from "react";
import { uniqueId } from "lodash";
import { useParams } from "react-router-dom";

interface IProps {
	word: string;
}

export const WordSynonyms: FC<IProps> = ({ word }) => {
	const { word } = useParams<{ word: string }>();
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
