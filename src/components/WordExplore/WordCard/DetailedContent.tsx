import { FC } from "react";
import { IResult } from "../../../app/interfaces/IWordExplore";
import { Card, Divider, List, ListItem, Stack, Typography } from "@mui/joy";
import { styled } from "@mui/material/styles";
import { DetailedListContent } from "./DetailedListContent";

interface IProps {
	data: IResult;
}

const StyledCard = styled(Card)({
	minWidth: "160px",
	maxHeight: "230px",
	overflowY: "auto",
});

export const DetailedContent: FC<IProps> = ({ data }) => {
	const listItems: JSX.Element[] = [];

	for (const key in data) {
		if (key === "definition" || key === "partOfSpeech") continue;

		if (Array.isArray(data[key])) {
			// For arrays, create a list of values with a maximum of 6 items
			const list = data[key] as string[];
			listItems.push(<DetailedListContent key={key} name={key} list={list} />);
		} else if (typeof data[key] === "string") {
			// For strings, display the value
			listItems.push(
				<StyledCard key={key} variant="outlined">
					<Typography
						id="basic-list-demo"
						level="body1"
						textTransform="uppercase"
						fontWeight="lg"
					>
						{key}
					</Typography>
					<Divider />
					<List aria-labelledby="basic-list-demo" sx={{ padding: 0 }}>
						<ListItem sx={{ padding: 0 }}>{data[key]}</ListItem>
					</List>
				</StyledCard>
			);
		}
		// If you have other data types in the object, add handling for them here
	}

	return (
		<Stack
			direction={{ xs: "column", sm: "row" }}
			spacing={2}
			useFlexGap
			flexWrap="wrap"
			sx={{ marginTop: "16px" }}
		>
			{listItems}
		</Stack>
	);
};
