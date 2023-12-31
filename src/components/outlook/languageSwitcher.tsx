import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { useTranslation } from "react-i18next";
import { FC } from "react";

export const LanguageSwitcher: FC = () => {
	const { i18n } = useTranslation();

	const handleChange = (_event: React.SyntheticEvent | null, newValue: string | undefined) => {
		i18n.changeLanguage(newValue);
	};

	return (
		<Select
			sx={{
				width: "fit-content",
			}}
			disabled={false}
			placeholder="Язык"
			// @ts-expect-error unknown
			onChange={handleChange}
			value={i18n.language}
		>
			<Option value="ru">RU</Option>
			<Option value="en">EN</Option>
		</Select>
	);
};
