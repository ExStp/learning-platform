import { Card, CircularProgress, Stack, Typography } from "@mui/joy";
import { wordsAPI } from "../../../../app/services/wordsAPI";
import { FC } from "react";
import { uniqueId } from "lodash";
import { AlertSmall } from "../../../alerts/AlertSmall";
import ReportIcon from "@mui/icons-material/Report";

interface IProps {
	word: string;
}

export const WordExamples: FC<IProps> = ({ word }) => {
	const { data, isFetching, isError } = wordsAPI.useFetchExamplesQuery(word);

	if (isFetching) return <CircularProgress />;
	if (isError) {
		return (
			<AlertSmall title="NetworkError" color="danger" icon={<ReportIcon />}>
				<Typography>Realod your browser</Typography>
			</AlertSmall>
		);
	}
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
