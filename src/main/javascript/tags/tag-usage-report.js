/*  Generates a report on tag usage across documents in Alfresco. */

// Configuration
var folderNodeRef = "workspace://SpacesStore/your-folder-node-id"; // Replace with your folder's NodeRef
var folder = search.findNode(folderNodeRef);

if (folder == null) {
    logger.log("Folder not found: " + folderNodeRef);
    throw "Folder not found: " + folderNodeRef;
}

var tagCounts = {};

// Function to count tags
function countTags(document) {
    var tags = document.tags;
    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i].name;
        if (tagCounts[tag]) {
            tagCounts[tag]++;
        } else {
            tagCounts[tag] = 1;
        }
    }
}

// Process the folder recursively
function processFolder(folder) {
    var children = folder.children;
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.isDocument) {
            countTags(child);
        } else if (child.isContainer) {
            processFolder(child);
        }
    }
}

// Start processing from the root folder
processFolder(folder);

// Output the tag usage report
logger.log("Tag Usage Report:");
for (var tag in tagCounts) {
    logger.log(tag + ": " + tagCounts[tag]);
}