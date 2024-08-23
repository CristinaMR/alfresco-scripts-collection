/* Extracts the textual content from a document stored in Alfresco. */

// Configuration
var documentNodeRef = "workspace://SpacesStore/your-document-node-id"; // Replace with your document's NodeRef

var document = search.findNode(documentNodeRef);

if (document == null) {
    logger.log("Document not found: " + documentNodeRef);
    throw "Document not found: " + documentNodeRef;
}

// Extract content
var contentText = document.content;

logger.log("Content of the document:\n" + contentText);