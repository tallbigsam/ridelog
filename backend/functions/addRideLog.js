// This function is the endpoint's request handler.
exports = function ({ query, headers, body }, response) {
  bodyJSON = JSON.parse(body.text());
  insertionDoc = {
    owner_id: bodyJSON.owner_id,
    title: bodyJSON.title,
    description: bodyJSON.description,
    route: bodyJSON.route,
    isDogFriendly: bodyJSON.isDogFriendly,
  };

  // Querying a mongodb service:
  return context.services
    .get("mongodb-atlas")
    .db("bikes")
    .collection("rideLogs")
    .insertOne(insertionDoc);
};
