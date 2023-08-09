import { CircularProgress, Typography } from "@mui/joy";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { wordsAPI } from "../../app/services/wordsAPI";
import { WordInfo } from "../../components/WordExplore/WordInfo";
import { AlertLarge } from "../../components/alerts/AlertLarge";
import { AlertSmall } from "../../components/alerts/AlertSmall";
import InfoIcon from "@mui/icons-material/Info";

export const WordExplore: FC = () => {
	const { word } = useParams<{ word: string }>();
	if (!word) return null;
	const { data, error, isFetching, isSuccess } = wordsAPI.useFetchExploreWordQuery(word);

	if (!isSuccess) {
		// @ts-expect-error unknown
		if (error?.status === "FETCH_ERROR") {
			return (
				<AlertLarge
					type="networkError"
					sx={{
						position: "fixed",
						left: "50%",
						top: "50%",
						transform: "translateX(-50%)",
					}}
				/>
			);
		}
		// @ts-expect-error unknown
		if (error?.status === 404) {
			return (
				<AlertSmall
					sx={{
						position: "fixed",
						left: "50%",
						top: "50%",
						transform: "translateX(-50%)",
					}}
					title="Word not found"
					icon={<InfoIcon />}
					color="neutral"
				>
					<Typography level="body1">Plese enter a correct word</Typography>
				</AlertSmall>
			);
		}
	}
	if (!data || isFetching) {
		return (
			<CircularProgress
				variant="soft"
				sx={{ position: "fixed", left: "50%", top: "50%", transform: "translateX(-50%)" }}
			/>
		);
	}
	if (isSuccess) return <WordInfo data={data} />;
};
