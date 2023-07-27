import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "./routes";

interface IProps {
	element: React.ReactNode;
}

export const PrivateRoute: FC<IProps> = ({ element }) => {
	const navigate = useNavigate();
	const isAuth: boolean = true;

	useEffect(() => {
		if (!isAuth) {
			return navigate(ROUTES.LOGIN);
		}
	}, []);

	return <>{element}</>;
};
