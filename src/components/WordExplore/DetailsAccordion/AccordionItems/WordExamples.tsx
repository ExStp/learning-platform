import { CircularProgress } from "@mui/joy";
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
	if (data) {
		return (
			<ul>
				{data?.examples.map((example) => (
					<li key={uniqueId()}>{example}</li>
				))}
			</ul>
		);
	}
};
