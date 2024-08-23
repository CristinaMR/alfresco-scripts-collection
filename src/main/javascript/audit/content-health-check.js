/* Performs a health check on content in the Alfresco repository. */

// Configuration
var folderNodeRef = "workspace://SpacesStore/your-folder-node-id"; // Replace with your folder's NodeRef
var folder = search.findNode(folderNodeRef);

if (folder == null) {
    logger.log("Folder not found: " + folderNodeRef);
    throw "Folder not found: " + folderNodeRef;
}

// Function to check for health issues in a document
function checkDocumentHealth(document) {
    if (!document.properties["cm:name"]) {
        logger.log("Document missing name: " + document.nodeRef);
    }
    if (!document.content) {
        logger.log("Document missing content: " + document.nodeRef);
    }
    // Add other health checks as needed
}

// Process the folder recursively
function processFolder(folder) {
    var children = folder.children;
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.isDocument) {
            checkDocumentHealth(child);
        } else if (child.isContainer) {
            processFolder(child);
        }
    }
}

// Start processing from the root folder
processFolder(folder);