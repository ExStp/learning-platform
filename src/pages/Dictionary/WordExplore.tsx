import { Box, Skeleton, Typography } from "@mui/joy";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { wordsAPI } from "../../app/services/wordsAPI";

export const WordExplore: FC = () => {
	const { word } = useParams<{ word: string }>();
	const { data, isFetching, error } = wordsAPI.useFetchExploreWordQuery(word);

	// @ts-expect-error unknown
	if (error?.status === "FETCH_ERROR") {
		return (
			<Box sx={{ width: "100%", mt: 4 }}>
				<Typography level="h3" textAlign="center">
					network error
				</Typography>
			</Box>
		);
	}
	// @ts-expect-error unknown
	if (error?.status === 404) {
		return (
			<Box sx={{ width: "100%", mt: 4 }}>
				<Typography level="h3" textAlign="center">
					word not found
				</Typography>
			</Box>
		);
	}
	return (
		<Box sx={{ width: "100%", mt: 4 }}>
			<Typography level="h3" textAlign="center">
				<Skeleton loading={isFetching}>{data?.word ?? "unknown word"}</Skeleton>
			</Typography>
		</Box>
	);
};
