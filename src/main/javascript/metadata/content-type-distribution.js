/* Analyzes the distribution of content types within an Alfresco directory. */

// Configuration
var folderNodeRef = "workspace://SpacesStore/your-folder-node-id"; // Replace with your folder's NodeRef
var folder = search.findNode(folderNodeRef);

if (folder == null) {
    logger.log("Folder not found: " + folderNodeRef);
    throw "Folder not found: " + folderNodeRef;
}

var contentTypeCounts = {};

// Function to count content types
function countContentType(document) {
    var mimeType = document.mimetype;
    if (contentTypeCounts[mimeType]) {
        contentTypeCounts[mimeType]++;
    } else {
        contentTypeCounts[mimeType] = 1;
    }
}

// Process the folder recursively
function processFolder(folder) {
    var children = folder.children;
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.isDocument) {
            countContentType(child);
        } else if (child.isContainer) {
            processFolder(child);
        }
    }
}

// Start processing from the root folder
processFolder(folder);

// Output the content type distribution
logger.log("Content-Type Distribution:");
for (var mimeType in contentTypeCounts) {
    logger.log(mimeType + ": " + contentTypeCounts[mimeType]);
}