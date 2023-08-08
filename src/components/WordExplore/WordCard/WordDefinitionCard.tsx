import React, { FC, useState } from "react";
import { IResult } from "../../../app/interfaces/IWordExplore";
import { Card, Typography, Chip, IconButton, Stack } from "@mui/joy";
import { useResize } from "../../../app/hooks/useResize";
import { DetailedContent } from "./DetailedContent";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IProps {
	result: IResult;
}

export const WordDefinitionCard: FC<IProps> = ({ result }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isHover, setIsHover] = useState(false);
	const { isScreenSm } = useResize();

	const handleExpandMore = (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
		setIsHover(true)
		event.stopPropagation();
		setIsExpanded(true);
	};
	const handleExpandLess = (event: React.MouseEvent<HTMLButtonElement>) => {
		setIsHover(false)
		event.stopPropagation();
		setIsExpanded(false);
	};

	return (
		<Card
			variant="plain"
			sx={{
				minWidth: "200px",
				transform: isHover ? "translateY(-5px)" : "none",
				transition: "transform 0.5s",
				cursor: isExpanded ? "default" : "pointer",
			}}
			onClick={handleExpandMore}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<Stack direction="row">
				{result?.partOfSpeech ? (
					<Chip size="sm" sx={{ marginRight: "12px", maxHeight: "18px" }}>
						{result?.partOfSpeech}
					</Chip>
				) : null}

				<Typography
					level={isScreenSm ? "body1" : "h5"}
					sx={{ textTransform: "capitalize", paddingRight: "24px" }}
				>
					{result?.definition}
				</Typography>
				{isExpanded ? (
					<IconButton
						variant="plain"
						sx={{ position: "absolute", right: "10px", top: "10px" }}
						onClick={handleExpandLess}
					>
						<ExpandLessIcon />
					</IconButton>
				) : (
					<IconButton
						variant="plain"
						sx={{ position: "absolute", right: "10px", top: "10px" }}
						onClick={handleExpandMore}
					>
						<ExpandMoreIcon />
					</IconButton>
				)}
			</Stack>
			{isExpanded && <DetailedContent data={result} />}
		</Card>
	);
};
