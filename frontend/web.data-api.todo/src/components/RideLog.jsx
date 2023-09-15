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
    <Grid container>
      <Grid item xs={12}>
        <h2>
          <em>Name:</em>&nbsp;&nbsp;&nbsp;{rideLog.title}
        </h2>
      </Grid>
      <Grid item xs={12}>
        <b>
          {rideLog.isDogFriendly && (
            <p>
              <em>Dog Friendly:</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x1F436;
            </p>
          )}
          {!rideLog.isDogFriendly && (
            <p>
              <em>Dog Friendly:</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x274C;
            </p>
          )}
        </b>
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
