/* Performs searches for documents using queries based on regular expressions or specific criteria. */

// Configuration
var query = "TYPE:\"cm:content\" AND @cm\\:title:\"*Your Search Term*\""; // Replace with your query
var maxItems = 100; // Maximum number of results to return

// Search for documents
var results = search.query({
    query: query,
    language: "fts-alfresco",
    page: { maxItems: maxItems }
});

logger.log("Found " + results.length + " documents.");

// Output results
for (var i = 0; i < results.length; i++) {
    var doc = results[i];
    logger.log("Document: " + doc.name + ", NodeRef: " + doc.nodeRef);
}