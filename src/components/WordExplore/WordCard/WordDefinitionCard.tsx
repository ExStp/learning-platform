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
	const { isScreenSm } = useResize();

	const handleToggleExpand = (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
		event.stopPropagation();
		setIsExpanded((prev) => !prev);
	};

	return (
		<Card
			variant="plain"
			sx={{
				minWidth: "200px",
				transform: isExpanded ? "translateY(-5px)" : "none",
				transition: "transform 0.5s",
				cursor: isExpanded ? "default" : "pointer",
			}}
			onClick={() => setIsExpanded(true)}
		>
			<Stack direction="row" alignItems="center">
				<Typography
					level={isScreenSm ? "body1" : "h5"}
					sx={{ textTransform: "capitalize", paddingRight: "24px", width: "100%" }}
				>
					{result?.partOfSpeech ? (
						<Chip size="sm" sx={{ marginRight: "12px", maxHeight: "18px" }}>
							{result?.partOfSpeech}
						</Chip>
					) : null}
					{result?.definition}
				</Typography>
				<IconButton onClick={handleToggleExpand} variant="plain">
					{isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
				</IconButton>
			</Stack>
			{isExpanded && <DetailedContent data={result} />}
		</Card>
	);
};
