import React from "react";
import {
  Container,
  Button,
  Typography,
  List,
  LinearProgress,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useRecipes } from "../hooks/useRecipes";
import { RecipeItem } from "./RecipeItem";
import { useDraftRecipes } from "../hooks/useDraftRecipes";
import { DraftRecipeItem } from "./DraftRecipeItem";
import { useShowLoader } from "../hooks/util-hooks";
import { MoreInfo } from "./MoreInfo";
import { getRecipeId } from "../utils";

export function RideLogsPage() {
  const { loading, rideLogs, ...rideActions } = useRideLogs();
  const { draftRideLog, ...draftRideLogActions } = useDraftRideLog();
  const showLoader = useShowLoader(loading, 200);
  return (
    <Container className="main-container" maxWidth="sm">
      {loading ? (
        showLoader ? (
          <LinearProgress />
        ) : null
      ) : (
        <div className="recipe-items-container">
          <Typography component="p" variant="h5">
            {`${recipes.length} Ride Log${
              recipes.length === 1 ? "" : "s"
            } logged.`}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => draftRideActions.createDraftRide()}
          >
            Add Ride
          </Button>
          <List style={{ width: "100%" }}>
            {rideLogs.map((rideLog) => (
              // Need a rideLog item instead of a 'TodoItem'
              // Will need to update the attributes for all the fields in the recipe collection
              // Need to update the component (each item gets a todo item component)
              // If I have a recipe page, I need to have a recipe component w/ recipe name, ingredients, etc
              <RideLogItem
                key={getRideLogId(rideLog)}
                rideLog={rideLog}
                rideLogActions={rideLogActions}
              />
            ))}
            {draftRideLogs.map((draft) => (
              // this is when you are drafting out a ride but haven't saved/added it yet
              <DraftRideLogItem
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
