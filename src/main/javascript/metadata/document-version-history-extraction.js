/*  Extracts and lists the version history of a specific document. */

// Configuration
var documentNodeRef = "workspace://SpacesStore/your-document-node-id"; // Replace with your document's NodeRef

var document = search.findNode(documentNodeRef);

if (document == null) {
    logger.log("Document not found: " + documentNodeRef);
    throw "Document not found: " + documentNodeRef;
}

// Retrieve version history
var versionHistory = document.versionHistory;
logger.log("Version history for document: " + document.name);

// Output version history
for (var i = 0; i < versionHistory.length; i++) {
    var version = versionHistory[i];
    logger.log("Version: " + version.label + ", Created By: " + version.creator + ", Created At: " + version.createdDate);
}