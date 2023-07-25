import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { useTranslation } from "react-i18next";

export function LangSwitcher() {
	const { i18n } = useTranslation();

	const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
		i18n.changeLanguage(newValue);
	};

	return (
		<Select
			sx={{
				width: "fit-content",
			}}
			disabled={false}
			placeholder="Язык"
			// @ts-ignore
			onChange={handleChange}
			value={i18n.language}
		>
			<Option value="ru">RU</Option>
			<Option value="en">EN</Option>
		</Select>
	);
}
