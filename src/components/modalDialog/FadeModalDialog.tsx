import * as React from "react";
import { Transition } from "react-transition-group";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import { FC } from "react";
interface IProps {
	onClose: () => void;
	isOpen: boolean;
	children?: React.ReactNode;
}

export const FadeModalDialog: FC<IProps> = ({ onClose, isOpen, children }) => {
	const modalRef = React.useRef<HTMLDivElement>(null);

	return (
		<React.Fragment>
			<Transition in={isOpen} timeout={400} nodeRef={modalRef}>
				{(state: string) => (
					<Modal
						keepMounted
						open={!["exited", "exiting"].includes(state)}
						onClose={onClose}
						slotProps={{
							backdrop: {
								sx: {
									opacity: 0,
									backdropFilter: "none",
									transition: `opacity 400ms, backdrop-filter 400ms`,
									...(state === "entering" || state === "entered"
										? { opacity: 1, backdropFilter: "blur(8px)" }
										: {}),
								},
							},
						}}
						sx={{
							visibility: state === "exited" ? "hidden" : "visible",
						}}
						ref={modalRef}
					>
						<ModalDialog
							aria-labelledby="fade-modal-dialog-title"
							aria-describedby="fade-modal-dialog-description"
							sx={{
								opacity: 0,
								transition: `opacity 300ms`,
								...(state === "entering" || state === "entered"
									? { opacity: 1 }
									: {}),
							}}
						>
							{children}
						</ModalDialog>
					</Modal>
				)}
			</Transition>
		</React.Fragment>
	);
};
