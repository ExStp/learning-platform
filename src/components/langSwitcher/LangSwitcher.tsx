import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { useTranslation } from "react-i18next";

export function LangSwitcher() {
	const { t, i18n } = useTranslation();

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		i18n.changeLanguage(newValue);
	};

	return (
		<Select
			sx={{
				width: "fit-content",
			}}
			disabled={false}
			placeholder="Язык"
			onChange={handleChange}
			value={i18n.language}
		>
			<Option value="ru">RU</Option>
			<Option value="en">EN</Option>
		</Select>
	);
}
