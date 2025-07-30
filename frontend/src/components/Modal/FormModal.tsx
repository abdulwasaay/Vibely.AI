import { Modal } from "@mui/material";
import React from "react";

const FormModal = ({ children , open , onClose }: { children: React.ReactNode, open: boolean, onClose: () => void }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="MUi MODAL"
            aria-describedby="MUi MODAL"
        >
            <>
                {children}
            </>
        </Modal>
    )
}

export default FormModal;