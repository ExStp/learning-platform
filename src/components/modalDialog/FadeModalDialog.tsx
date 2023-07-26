import * as React from "react";
import { Transition } from "react-transition-group";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";

export const FadeModalDialog = () => {
	const [open, setOpen] = React.useState<boolean>(false);
	const modalRef = React.useRef<HTMLDivElement>(null);

	return (
		<React.Fragment>
			<Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
				Open modal
			</Button>
			<Transition in={open} timeout={400} nodeRef={modalRef}>
				{(state: string) => (
					<Modal
						keepMounted
						open={!["exited", "exiting"].includes(state)}
						onClose={() => setOpen(false)}
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
							<Typography id="fade-modal-dialog-title" component="h2">
								Transition modal
							</Typography>
							<Typography
								id="fade-modal-dialog-description"
								textColor="text.tertiary"
							>
								Using `react-transition-group` to create a fade animation.
							</Typography>
						</ModalDialog>
					</Modal>
				)}
			</Transition>
		</React.Fragment>
	);
};
