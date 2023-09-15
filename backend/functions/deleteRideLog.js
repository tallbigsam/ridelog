// This function is the endpoint's request handler.
exports = function ({ query, headers, body }, response) {
  rideLogToDelete = JSON.parse(body.text());
  return context.services
    .get("mongodb-atlas")
    .db("bikes")
    .collection("rideLogs")
    .findOneAndDelete(rideLogToDelete);
};
