import { FC } from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { palette } from "../../assets/colors/palette";
import { useAppDispatch, useAppSelector } from "../../app/hooks/redux";
import { setColorScheme } from "../../app/slices/theme";
import { IPaletteColors } from "../../app/types/ITheme";

interface IProps {
	themeMode: "dark" | "light";
}

export const PrimaryColorSwitcher: FC<IProps> = ({ themeMode }) => {
	const currentColorSchemes = useAppSelector((state) => state.themeSlice.colorSchemes);
	const dispatch = useAppDispatch();

	const handleChange = (_event: React.SyntheticEvent | null, newValue: IPaletteColors) => {
		const newColorScheme = {
			...currentColorSchemes,
			[themeMode]: {
				...currentColorSchemes[themeMode],
				palette: {
					...currentColorSchemes[themeMode].palette,
					primary: newValue,
				},
			},
		};
		dispatch(setColorScheme(newColorScheme));
	};

	return (
		<Select
			defaultValue={currentColorSchemes[themeMode].palette.primary}
			// @ts-expect-error unknown overload
			onChange={handleChange}
		>
			<Option value={palette.stone}>stone</Option>
			<Option value={palette.sky}>sky</Option>
			<Option value={palette.violet}>vieolet</Option>
			<Option value={palette.emerald}>emerald</Option>
			<Option value={palette.cyan}>cyan</Option>
			<Option value={palette.red}>red</Option>
		</Select>
	);
};
