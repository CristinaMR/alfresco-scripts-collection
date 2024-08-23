/* Identifies documents that are nearing their expiration date or have already expired. */

// Configuration
var folderNodeRef = "workspace://SpacesStore/your-folder-node-id"; // Replace with your folder's NodeRef
var folder = search.findNode(folderNodeRef);

if (folder == null) {
    logger.log("Folder not found: " + folderNodeRef);
    throw "Folder not found: " + folderNodeRef;
}

var today = new Date();

// Function to check document expiry
function checkDocumentExpiry(document) {
    var expiryDate = document.properties["cm:expirationDate"];
    if (expiryDate && expiryDate < today) {
        logger.log("Expired document: " + document.name + ", Expiry Date: " + expiryDate);
    }
}

// Process the folder recursively
function processFolder(folder) {
    var children = folder.children;
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.isDocument) {
            checkDocumentExpiry(child);
        } else if (child.isContainer) {
            processFolder(child);
        }
    }
}

// Start processing from the root folder
processFolder(folder);