import React from "react";
import { createObjectId } from "../utils";

export function useDraftRideLogs() {
  const [drafts, setDrafts] = React.useState([]);

  const createDraftRideLog = () => {
    const draftRideLog = {
      _id: createObjectId(),
      title: "",
      ingredients: [],
      instructions: [],
    };
    setDrafts((d) => [...d, draftRideLog]);
  };

  const setDraftRideLogTitle = (draft, title) => {
    setDrafts((oldDrafts) => {
      const idx = oldDrafts.findIndex((d) => d._id === draft._id);
      return [
        ...oldDrafts.slice(0, idx),
        { ...oldDrafts[idx], title },
        ...oldDrafts.slice(idx + 1),
      ];
    });
  };

  const setDraftRideLogDescription = (draft, description) => {
    setDrafts((oldDrafts) => {
      const idx = oldDrafts.findIndex((d) => d._id === draft._id);
      return [
        ...oldDrafts.slice(0, idx),
        { ...oldDrafts[idx], description },
        ...oldDrafts.slice(idx + 1),
      ];
    });
  };

  const setDraftRideLogRoute = (draft, route) => {
    setDrafts((oldDrafts) => {
      const idx = oldDrafts.findIndex((d) => d._id === draft._id);
      return [
        ...oldDrafts.slice(0, idx),
        { ...oldDrafts[idx], route },
        ...oldDrafts.slice(idx + 1),
      ];
    });
  };

  const deleteDraftRideLog = (draft) => {
    setDrafts((oldDrafts) => {
      const idx = oldDrafts.findIndex((d) => d._id === draft._id);
      return [...oldDrafts.slice(0, idx), ...oldDrafts.slice(idx + 1)];
    });
  };

  return {
    draftRideLogs: drafts,
    createDraftRideLog,
    setDraftRideLogTitle,
    setDraftRideLogDescription,
    setDraftRideLogRoute,
    deleteDraftRideLog,
  };
}
