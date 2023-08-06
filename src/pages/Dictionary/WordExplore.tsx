import { CircularProgress, Typography } from "@mui/joy";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { wordsAPI } from "../../app/services/wordsAPI";
import { WordInfo } from "../../components/WordExplore/WordInfo";

export const WordExplore: FC = () => {
	const { word } = useParams<{ word: string }>();
	if (!word) return null;
	const { data, error, isFetching } = wordsAPI.useFetchExploreWordQuery(word);
	console.log(data);

	// @ts-expect-error unknown
	if (error?.status === "FETCH_ERROR") {
		return (
			<Typography level="h3" textAlign="center">
				network error
			</Typography>
		);
	}
	// @ts-expect-error unknown
	if (error?.status === 404) {
		return (
			<Typography level="h3" textAlign="center">
				word not found
			</Typography>
		);
	}
	if (!data || isFetching) {
		return (
			<CircularProgress
				variant="soft"
				sx={{ position: "fixed", left: "50%", top: "50%", transform: "translateX(-50%)" }}
			/>
		);
	}
	return <WordInfo data={data} />;
};
