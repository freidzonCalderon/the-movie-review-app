import React from "react";
import { Alert, Button, Modal } from "react-bootstrap";

const AlertsMismatch = ({ setShowModal, messageAlert }) => {
	return (
		<Modal show={true}>
			<Modal.Header closeButton>
				<Modal.Title>Error</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Alert variant="danger">{messageAlert}</Alert>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="dark" onClick={() => setShowModal(false)}>
					Ok
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default AlertsMismatch;
