import React from "react";
import { EJSON, ObjectId } from "bson";
import atlasConfig from "../atlasConfig.json";
import { useDataApi } from "./useDataApi";
import { addValueAtIndex, removeValueAtIndex, getRideLogIndex } from "../utils";

const { dataSourceName } = atlasConfig;

const rideLogCollection = {
  dataSource: dataSourceName,
  database: "recipes",
  collection: "recipe",
};

export function useRideLogs() {
  // Set up a list of recipes in state
  const api = useDataApi();
  const [rideLogs, setRideLogs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // Fetch all rides on load and whenever our collection changes (e.g. if the current user changes)
  React.useEffect(() => {
    if (api.currentUser) {
      console.log("api.currentUser: ", api.currentUser);
      (async () => {
        console.log("Retrieving ride logs.");
        try {
          const documents = await api.getRideLogs({
            ...rideLogCollection,
            filter: {},
          });
          console.log("populating ridelogs with: " + documents);
          setRideLogs(documents);
          setLoading(false);
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }, [api, api.currentUser?.id]);

  // Given a draft recipe, format it and then insert it
  const saveRideLog = async (draftRideLog) => {
    // Instead of a summary, I would need to change this to recipe name, list of ingredientsa
    if (
      draftRideLog.title &&
      draftRideLog.ingredients &&
      draftRideLog.instructions
    ) {
      try {
        const document = {
          ...draftRideLog,
          owner_id: api.currentUser.id,
        };
        console.log("adding rideLog:" + document);
        await api.addRideLog({
          ...document,
        });
        setRideLogs((oldRideLogs) => {
          const idx = oldRideLogs.length;
          return addValueAtIndex(oldRideLogs, idx, {
            ...document,
          });
        });
      } catch (err) {
        if (err.error?.match(/^Duplicate key error/)) {
          console.warn(
            `The following error means that this app tried to insert a rideLog multiple times (i.e. an existing recipe has the same _id). In this app we just catch the error and move on. In your app, you might want to debounce the save input or implement an additional loading state to avoid sending the request in the first place.`
          );
        }
        console.error(err);
      }
    }
  };

  // Delete a given rideLog
  const deleteRideLog = async (rideLog) => {
    await api.deleteRideLog({
      title: rideLog.title,
    });
    setRideLogs((oldRideLogs) => {
      const idx = getRideLogIndex(oldRideLogs, rideLog);
      return removeValueAtIndex(oldRideLogs, idx);
    });
  };

  return {
    loading,
    rideLogs,
    saveRideLog,
    deleteRideLog,
  };
}
