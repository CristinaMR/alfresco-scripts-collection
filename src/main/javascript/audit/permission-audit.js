/* Audits the permissions configured on a directory or document. */

// Configuration
var folderNodeRef = "workspace://SpacesStore/your-folder-node-id"; // Replace with your folder's NodeRef

var folder = search.findNode(folderNodeRef);

if (folder == null) {
    logger.log("Folder not found: " + folderNodeRef);
    throw "Folder not found: " + folderNodeRef;
}

// Function to audit permissions on a document or folder
function auditPermissions(node) {
    logger.log("Permissions for: " + node.name);
    var permissions = node.getPermissions();
    for (var i = 0; i < permissions.length; i++) {
        logger.log(permissions[i]);
    }
}

// Audit permissions recursively
function processFolder(folder) {
    auditPermissions(folder);
    var children = folder.children;
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.isDocument) {
            auditPermissions(child);
        } else if (child.isContainer) {
            processFolder(child);
        }
    }
}

// Start auditing from the root folder
processFolder(folder);