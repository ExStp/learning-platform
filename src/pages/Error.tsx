import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../app/routers/routes";

export const Error: FC = () => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate(ROUTES.HOME);
	}, []);
	return <h1>Not Found!</h1>;
};
