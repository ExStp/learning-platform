import { CircularProgress, Stack, Typography } from "@mui/joy";
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
    console.log(data);
	if (isFetching) return <CircularProgress />;
	if (isError) {
		return (
			<AlertSmall title="NetworkError" color="danger" icon={<ReportIcon />}>
				<Typography>Realod your browser</Typography>
			</AlertSmall>
		);
	}
	if (data?.frequency) {
		return (
			<Stack spacing={1} direction={{ xs: "column", sm: "row" }} useFlexGap flexWrap="wrap">
				frequency
			</Stack>
		);
	} else {
		return <AlertSmall title="no data" color="neutral" icon={<InfoIcon />} />;
	}
};
