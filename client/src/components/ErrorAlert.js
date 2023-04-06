import { Alert } from "@mui/material";

export const ErrorAlert = ({ error }) => {
  return (
    <>
      <Alert severity="error">
          {(error.body?.message && ` ${error.body.message} `) ||
            'Service currently not available or Unknown Error occured'}
      </Alert>
    </>
  );
};