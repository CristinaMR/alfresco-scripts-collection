/* Creates a map showing dependencies between documents in Alfresco. */

// Configuration
var folderNodeRef = "workspace://SpacesStore/your-folder-node-id"; // Replace with your folder's NodeRef
var folder = search.findNode(folderNodeRef);

if (folder == null) {
    logger.log("Folder not found: " + folderNodeRef);
    throw "Folder not found: " + folderNodeRef;
}

// Function to list document dependencies
function listDependencies(document) {
    var associations = document.associations;
    for (var assocType in associations) {
        var targets = associations[assocType];
        for (var i = 0; i < targets.length; i++) {
            var target = targets[i];
            logger.log("Document: " + document.name + " is associated with: " + target.name + " via: " + assocType);
        }
    }
}

// Process the folder recursively
function processFolder(folder) {
    var children = folder.children;
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.isDocument) {
            listDependencies(child);
        } else if (child.isContainer) {
            processFolder(child);
        }
    }
}

// Start processing from the root folder
processFolder(folder);