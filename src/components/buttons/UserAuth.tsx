import { FC } from "react";
import { IconButton } from "@mui/joy";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAppDispatch, useAppSelector } from "../../app/hooks/redux";
import { FadeModalDialog } from "../modalDialog/FadeModalDialog";
import { UserAuthContent } from "../../layout/modals/UserAuthContent";
import { toggleUserAuth } from "../../app/slices/modals";

export const UserAuth: FC = () => {
	const IsUserAuthOpen = useAppSelector((state) => state.modalsSlice.userAuth);
	const dispatch = useAppDispatch();

	const handleCloseModal = () => {
		dispatch(toggleUserAuth(false));
	};

	const handleOpenModal = () => {
		dispatch(toggleUserAuth(true));
	};

	return (
		<>
			<IconButton variant="solid" onClick={handleOpenModal}>
				<AccountCircleIcon />
			</IconButton>
			<FadeModalDialog isOpen={IsUserAuthOpen} onClose={handleCloseModal}>
				<UserAuthContent />
			</FadeModalDialog>
		</>
	);
};
