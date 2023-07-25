import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { useTranslation } from "react-i18next";

export function LangSwitcher() {
	const { i18n } = useTranslation();

	const handleChange = (_event: React.ChangeEvent<{ value: unknown }>, newValue: string) => {
		i18n.changeLanguage(newValue);
	};

	return (
		<Select
			sx={{
				width: "fit-content",
			}}
			disabled={false}
			placeholder="Язык"
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			onChange={handleChange}
			value={i18n.language}
		>
			<Option value="ru">RU</Option>
			<Option value="en">EN</Option>
		</Select>
	);
}
