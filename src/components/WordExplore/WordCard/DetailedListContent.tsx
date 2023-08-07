import { Card, Divider, List, ListItem, Typography, styled } from "@mui/joy";
import { FC, useState } from "react";

interface IProps {
	list: Array<string>;
}

const StyledCard = styled(Card)({
	minWidth: "160px",
	maxHeight: "230px",
	overflowY: "auto",
});

export const DetailedListContent: FC<IProps> = ({ list }) => {
	const isExpanded = useState(false);
	const itemsToShow = isExpanded ? list : list.slice(0, 6);

	return (
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
				{itemsToShow.map((item) => (
					<ListItem key={item} sx={{ padding: 0 }}>
						{item}
					</ListItem>
				))}
			</List>
		</StyledCard>
	);
};
