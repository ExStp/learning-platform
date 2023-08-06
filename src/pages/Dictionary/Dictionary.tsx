import { Box, IconButton, Input } from "@mui/joy";
import { FC, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useResize } from "../../app/hooks/useResize";

const initInput: string = "";

export const Dictionary: FC = () => {
	const [wordInput, setWordInput] = useState(initInput);
	const navigate = useNavigate();
	const { isScreenSm } = useResize();

	const handleWordExplore = (event: React.FormEvent) => {
		event.preventDefault();
		if (wordInput.trim() === initInput) return;
		navigate(wordInput.trim());
		setWordInput(initInput);
	};
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				margin: "64px 0",
			}}
		>
			<form
				onSubmit={handleWordExplore}
				style={{
					width: "100%",
					maxWidth: "800px",
					display: "flex",
					gap: isScreenSm ? "0" : "12px",
				}}
			>
				<Input
					sx={{ width: "100%" }}
					placeholder="explore the word"
					size={isScreenSm ? "md" : "lg"}
					value={wordInput}
					onChange={(e) => setWordInput(e.target.value)}
				/>
				<IconButton
					variant="plain"
					size={isScreenSm ? "md" : "lg"}
					onClick={handleWordExplore}
				>
					<SearchIcon />
				</IconButton>
			</form>
			<Outlet />
		</Box>
	);
};
