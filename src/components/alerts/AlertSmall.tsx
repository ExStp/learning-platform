import { Alert, Typography } from "@mui/joy";
import { ReactNode, FC } from "react";

interface IProps {
	sx?: {
		[key: string]: string;
	};
	title: string;
	color: "success" | "warning" | "danger" | "neutral";
	icon: ReactNode;
	children?: ReactNode;
}

export const AlertSmall: FC<IProps> = ({ sx, title, color, icon, children }) => {
	return (
		<Alert
			key={title}
			sx={{
				alignItems: "flex-start",
				maxWidth: "400px",
				...sx,
			}}
			startDecorator={icon}
			variant="soft"
			color={color}
		>
			<div>
				<Typography level="h6">{title}</Typography>
				{children}
			</div>
		</Alert>
	);
};
