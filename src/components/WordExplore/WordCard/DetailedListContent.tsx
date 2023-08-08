import { Card, Divider, IconButton, List, ListItem, Typography } from "@mui/joy";
import { FC, useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IProps {
	list: Array<string>;
	name: string;
}

export const DetailedListContent: FC<IProps> = ({ list, name }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const itemsToShow = isExpanded ? list : list.slice(0, 3);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};
	return (
		<Card
			key={name}
			variant="outlined"
			sx={{ minWidth: "160px", transition: "height 0.5s", height: "min-content" }}
		>
			<Typography
				id="basic-list-demo"
				level="body1"
				textTransform="uppercase"
				fontWeight="lg"
			>
				{name}
			</Typography>
			<Divider />
			<List aria-labelledby="basic-list-demo" sx={{ padding: 0 }}>
				{itemsToShow.map((item) => (
					<ListItem key={item} sx={{ padding: 0 }}>
						{item}
					</ListItem>
				))}
			</List>
			{list.length > 3 ? (
				<IconButton size="sm" onClick={toggleExpand}>
					{isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
				</IconButton>
			) : null}
		</Card>
	);
};
