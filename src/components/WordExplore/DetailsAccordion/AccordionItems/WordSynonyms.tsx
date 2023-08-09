import { Card, CircularProgress, Stack, Typography } from "@mui/joy";
import { wordsAPI } from "../../../../app/services/wordsAPI";
import { FC } from "react";
import { uniqueId } from "lodash";
import { AlertSmall } from "../../../alerts/AlertSmall";
import ReportIcon from "@mui/icons-material/Report";
import InfoIcon from "@mui/icons-material/Info";

interface IProps {
	word: string;
}

export const WordSynonyms: FC<IProps> = ({ word }) => {
	const { data, isFetching, isError } = wordsAPI.useFetchSynonymsQuery(word);

	if (isFetching) return <CircularProgress />;
	if (isError) {
		return (
			<AlertSmall title="NetworkError" color="danger" icon={<ReportIcon />}>
				<Typography>Realod your browser</Typography>
			</AlertSmall>
		);
	}
	if (data?.synonyms.length) {
		return (
			<Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
				{data?.synonyms.map((synonym) => (
					<Card key={uniqueId()}>{synonym}</Card>
				))}
			</Stack>
		);
	} else {
		return <AlertSmall title="no data" color="neutral" icon={<InfoIcon />} />;
	}
};
