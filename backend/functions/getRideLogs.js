// This function is the endpoint's request handler.
exports = function ({ query, headers, body }, response) {
  // Querying a mongodb service:
  return context.services
    .get("mongodb-atlas")
    .db("bikes")
    .collection("rideLogs")
    .find({});
};
