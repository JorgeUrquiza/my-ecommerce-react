import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const ShippingSuccess = ({ enviosId }) => {
    return (
        <Stack sx={{ width: "100%", my: "2%" }} spacing={2}>
            <Alert severity="success">
                Gracias por su compra, su codigo de envio es: {enviosId}
            </Alert>
        </Stack>
    );
};

export default ShippingSuccess;
