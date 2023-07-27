import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "./routes";
import { useAppSelector } from "../hooks/redux";

interface IProps {
	element: React.ReactNode;
}

export const PublicRoute: FC<IProps> = ({ element }) => {
	const navigate = useNavigate();
	const isAuth = useAppSelector((state) => state.authSlice.isAuth);

	useEffect(() => {
		if (isAuth) {
			return navigate(ROUTES.CHAT);
		}
	}, []);

	return <>{element}</>;
};
