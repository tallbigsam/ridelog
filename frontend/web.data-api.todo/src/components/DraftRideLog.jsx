import React from "react";
import {
  Grid,
  TextField,
  Button,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  FormControlLabel,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export function DraftRideLog({ rideLog, rideLogActions, draftRideLogActions }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          // style={{ width: "100%" }}
          // size="small"
          label="Title"
          value={rideLog.title}
          onChange={(e) => {
            draftRideLogActions.setDraftRideLogTitle(rideLog, e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={6} id="is-dog-friendly">
        Dog Friendly
        <input
          label="Dog Friendly"
          type="checkbox"
          checked={rideLog.isDogFriendly}
          onChange={(e) => {
            draftRideLogActions.setDraftRideLogDogFriendly(
              rideLog,
              !rideLog.isDogFriendly
            );
          }}
        />
      </Grid>
      <Grid item xs="auto">
        <TextField
          // style={{ width: "100%" }}
          // size="small"
          label="Description"
          multiline
          value={rideLog.description}
          // value={recipe.ingredients.split("\n")}
          onChange={(e) => {
            draftRideLogActions.setDraftRideLogDescription(
              rideLog,
              e.target.value
            );
          }}
        />
      </Grid>
      <Grid item xs="auto">
        <TextField
          // style={{ width: "100%" }}
          // size="small"
          label="Route"
          multiline
          value={rideLog.route}
          // value={recipe.instructions.split("\n")}
          onChange={(e) => {
            draftRideLogActions.setDraftRideLogRoute(rideLog, e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12}>
        {/* <ListItemSecondaryAction> */}
        <Button
          variant="outlined"
          size="small"
          onClick={async () => {
            await rideLogActions.saveRideLog(rideLog);
            draftRideLogActions.deleteDraftRideLog(rideLog);
          }}
        >
          Save
        </Button>
        <Button
          edge="end"
          size="small"
          onClick={() => {
            draftRideLogActions.deleteDraftRideLog(rideLog);
          }}
        >
          <ClearIcon />
        </Button>
        {/* </ListItemSecondaryAction> */}
      </Grid>
    </Grid>
  );
}
