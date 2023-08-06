import { FC } from "react";
import { useParams } from "react-router-dom";

export const WordExplore: FC = () => {
	const { word } = useParams<{ word: string }>();
	return <h3>{word}</h3>;
};
