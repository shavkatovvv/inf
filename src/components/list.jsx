import { Box, Typography } from "@mui/material";
import React from "react";

export const List = ({ img, title, price, id }) => {
    return (
        <Box
            sx={{
                bgcolor: "aqua",
                padding: "20px",
                borderRadius: "10px",

                height: "550px",
            }}
        >
            <img style={{ width: "100%" }} src={img} alt="img" />
            <Typography sx={{ color: "white" }} variant="h3">
                {title}
            </Typography>
            <Typography sx={{ color: "white" }}>{price}</Typography>
        </Box>
    );
};
