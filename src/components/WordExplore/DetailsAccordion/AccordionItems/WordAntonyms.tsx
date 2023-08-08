import { CircularProgress } from "@mui/joy";
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
			<ul>
				{data?.antonyms.map((antonym) => (
					<li key={uniqueId()}>{antonym}</li>
				))}
			</ul>
		);
	} else {
		return <p>нет данных</p>;
	}
};
