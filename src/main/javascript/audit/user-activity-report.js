/* Generates a report of user activities over a specified period. */

// Configuration
var startDate = "2023-01-01T00:00:00.000Z"; // Start date in ISO 8601 format
var endDate = "2023-12-31T23:59:59.999Z"; // End date in ISO 8601 format

// Retrieve audit data
var auditQuery = {
    user: "cm:creator",
    start: startDate,
    end: endDate
};

var results = audit.query(auditQuery);

logger.log("User activity report:");

// Output user activity
for (var i = 0; i < results.length; i++) {
    var entry = results[i];
    logger.log("User: " + entry.user + ", Action: " + entry.action + ", Timestamp: " + entry.time);
}