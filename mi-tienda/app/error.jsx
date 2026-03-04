"use client";

import { useEffect } from "react";
import { Alert, AlertTitle, IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const Error = ({ error, reset }) => {
	useEffect(() => {
		console.error("Ocurrió un error:", error.message);
	}, [error]);

	return (
		<Alert
			severity="error"
			action={
				<IconButton
					color="inherit"
					aria-label="reintentar"
					onClick={() => reset()}
				>
					<RefreshIcon />
				</IconButton>
			}
		>
			<AlertTitle>¡Ocurrió un error!</AlertTitle>
			Comparte este código con tu administrador: {error.digest}
		</Alert>
	);
};

export default Error;
