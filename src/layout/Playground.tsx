import Box from "@mui/joy/Box";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { useTranslation } from "react-i18next";
import { Counter } from "../components/counter/Counter";
import Stack from "@mui/joy/Stack";
import { SettingsUI } from "../components/buttons/SettingsUI";

export function Playground() {
	const { t } = useTranslation();

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log(event);
	};

	return (
		<Box sx={{ height: "fit-content" }}>
			<Stack spacing={2}>
				<p className="read-the-docs">{t("title")}</p>
				<Input
					color="primary"
					placeholder={t("input.send message")}
					size="md"
					variant="plain"
				/>
				<Counter />
				<Button onClick={handleClick} variant="outlined">
					Кнопка
				</Button>
				<SettingsUI />
			</Stack>
		</Box>
	);
}
