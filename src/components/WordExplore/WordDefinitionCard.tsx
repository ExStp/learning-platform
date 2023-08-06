import { FC, useState } from "react";
import { IResult } from "../../app/interfaces/IWordExplore";
import { Card, Typography, Chip } from "@mui/joy";
import { useResize } from "../../app/hooks/useResize";

interface IProps {
	result: IResult;
}

export const WordDefinitionCard: FC<IProps> = ({ result }) => {
	const [isDetails, setIsDetails] = useState(false);
	const { isScreenSm } = useResize();

	return (
		<Card
			variant="plain"
			sx={{ minWidth: 300, cursor: "pointer" }}
			onClick={() => setIsDetails(!isDetails)}
		>
			<Typography level={isScreenSm ? "body1" : "h5"} sx={{ textTransform: "capitalize" }}>
				<Chip size="sm" sx={{ marginRight: "12px" }}>
					{result.partOfSpeech}
				</Chip>
				{result.definition}
			</Typography>
			{isDetails && (
				<ul>
					{result.examples?.map((example) => (
						<li>{example}</li>
					))}
				</ul>
			)}
		</Card>
	);
};
