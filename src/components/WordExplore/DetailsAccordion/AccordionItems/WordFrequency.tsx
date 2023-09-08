import { CircularProgress, Stack, Typography, Divider, Card } from "@mui/joy";
import { wordsAPI } from "../../../../app/services/wordsAPI";
import { FC } from "react";
import { AlertSmall } from "../../../alerts/AlertSmall";
import ReportIcon from "@mui/icons-material/Report";
import InfoIcon from "@mui/icons-material/Info";

interface IProps {
	word: string;
}

export const WordFrequency: FC<IProps> = ({ word }) => {
	const { data, isFetching, isError } = wordsAPI.useFetchFrequencyQuery(word);

	if (isFetching) return <CircularProgress />;
	if (isError) {
		return (
			<AlertSmall title="NetworkError" color="danger" icon={<ReportIcon />}>
				<Typography>Realod your browser</Typography>
			</AlertSmall>
		);
	}
	if (data?.frequency) {
		const { diversity, perMillion, zipf } = data.frequency;
		return (
			<Stack
				direction="row"
				divider={<Divider orientation="vertical" />}
				spacing={2}
				justifyContent="start"
			>
				<Card>Diversity:  {diversity ?? "no data"}</Card>
				<Card>perMillion:  {perMillion ?? "no data"}</Card>
				<Card>zipf:  {zipf ?? "no data"}</Card>
			</Stack>
		);
	} else {
		return <AlertSmall title="no data" color="neutral" icon={<InfoIcon />} />;
	}
};
