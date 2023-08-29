import React from "react";
import {
  Container,
  Button,
  Typography,
  List,
  LinearProgress,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useRideLogs } from "../hooks/useRideLogs";
import { RideLog } from "./RideLog";
import { useDraftRideLogs } from "../hooks/useDraftRideLogs";
import { DraftRideLog } from "./DraftRideLog";
import { useShowLoader } from "../hooks/util-hooks";
import { MoreInfo } from "./MoreInfo";
import { getRideLogId } from "../utils";

export function RideLogsPage() {
  const { loading, rideLogs, ...rideLogActions } = useRideLogs();
  const { draftRideLogs, ...draftRideLogActions } = useDraftRideLogs();
  const showLoader = useShowLoader(loading, 200);
  return (
    <Container className="main-container" maxWidth="sm">
      {loading ? (
        showLoader ? (
          <LinearProgress />
        ) : null
      ) : (
        <div className="ridelog-items-container">
          <Typography component="p" variant="h5">
            {`${rideLogs.length} Ride Log${rideLogs.length === 1 ? "" : "s"}`}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => draftRideLogActions.createDraftRideLog()}
          >
            Add Ride Log
          </Button>
          <List style={{ width: "100%" }}>
            {rideLogs.map((rideLog) => (
              // Need a rideLog item instead of a 'TodoItem'
              // Will need to update the attributes for all the fields in the recipe collection
              // Need to update the component (each item gets a todo item component)
              // If I have a recipe page, I need to have a recipe component w/ recipe name, ingredients, etc
              <RideLog
                key={getRideLogId(rideLog)}
                rideLog={rideLog}
                rideLogActions={rideLogActions}
              />
            ))}
            {draftRideLogs.map((draft) => (
              // this is when you are drafting out a rideLog but haven't saved/added it yet
              <DraftRideLog
                key={getRideLogId(draft)}
                rideLog={draft}
                rideLogActions={rideLogActions}
                draftRideLogActions={draftRideLogActions}
              />
            ))}
          </List>
        </div>
      )}
      <MoreInfo />
    </Container>
  );
}
