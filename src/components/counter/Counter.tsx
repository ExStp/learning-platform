import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import { useAppDispatch, useAppSelector } from "../../app/hooks/redux";
import { decrement, increment, incrementByAmount } from "../../app/slices/counter";
import { useTranslation } from "react-i18next";

export function Counter() {
	const count = useAppSelector((state) => state.counterSlice.value);
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	return (
		<ButtonGroup spacing="0.5rem" aria-label="spacing button group">
			<Button onClick={() => dispatch(increment())}>{t("btn.increment")}</Button>
			<Button onClick={() => dispatch(incrementByAmount(2))}>{count}</Button>
			<Button onClick={() => dispatch(decrement())}>{t("btn.decrement")}</Button>
		</ButtonGroup>
	);
}
