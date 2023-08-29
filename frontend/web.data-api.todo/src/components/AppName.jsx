import React from "react";
import { Typography } from "@mui/material";

export const API_TYPE_NAME = "Bikes";

export function AppName() {
  return (
    <Typography className="app-bar-title" component="h1" variant="h5">
      Mucky Bikes'n'Paws
    </Typography>
  );
}
