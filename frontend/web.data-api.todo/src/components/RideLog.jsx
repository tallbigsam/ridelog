import React from "react";
import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  TextField,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export function RideLog({ rideLog, rideLogActions }) {
  const description = rideLog.description.split("\n");
  const route = rideLog.route.split("\n");
  // const funFactor = rideLog.funFactor.split("\n");
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <b>
          <em>Name:</em>
        </b>{" "}
        {rideLog.title}
      </Grid>
      <Grid item xs={12}>
        <List>
          <b>
            <em>Description:</em>
          </b>{" "}
          {description.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12}>
        <List>
          <b>
            <em>Route:</em>
          </b>{" "}
          {route.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item>
        {/* <ListItemSecondaryAction> */}
        <IconButton
          data-testid="recipe-delete-button"
          edge="end"
          size="small"
          onClick={() => {
            rideLogActions.deleteRideLog(rideLog);
          }}
        >
          <ClearIcon />
        </IconButton>
        {/* </ListItemSecondaryAction> */}
      </Grid>
    </Grid>
  );
}
