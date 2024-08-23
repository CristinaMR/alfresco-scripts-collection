/* Generates a detailed report of the folder tree structure in Alfresco, including the hierarchy and associated metadata for each folder and subfolder, and exports the report to a CSV file. */

// Configuration
var rootFolderNodeRef = "workspace://SpacesStore/your-folder-node-id"; // Replace with the NodeRef of the folder you want to analyze
var outputFolderNodeRef = "workspace://SpacesStore/your-output-folder-node-id"; // Replace with the NodeRef of the folder where the CSV/Excel will be saved
var outputFileName = "folder_structure_report.csv"; // Name of the output file

var rootFolder = search.findNode(rootFolderNodeRef);
var outputFolder = search.findNode(outputFolderNodeRef);

if (rootFolder == null) {
    logger.log("Folder not found: " + rootFolderNodeRef);
    throw "Folder not found: " + rootFolderNodeRef;
}

if (outputFolder == null) {
    logger.log("Output folder not found: " + outputFolderNodeRef);
    throw "Output folder not found: " + outputFolderNodeRef;
}

var csvContent = "Folder Path,Folder Name,Number of Subfolders,Number of Documents\n"; // CSV header

// Function to generate the folder tree structure and build CSV content
function generateFolderTree(folder, path) {
    var subfolders = 0;
    var documents = 0;

    // Count the number of subfolders and documents in the current folder
    var children = folder.children;
    for (var i = 0; i < children.length; i++) {
        if (children[i].isContainer) {
            subfolders++;
        } else if (children[i].isDocument) {
            documents++;
        }
    }

    var currentPath = path + "/" + folder.name;

    // Append current folder's details to the CSV content
    csvContent += "\"" + currentPath + "\",\"" + folder.name + "\"," + subfolders + "," + documents + "\n";

    // Print the current folder's details
    logger.log(currentPath + " (" + subfolders + " folders, " + documents + " documents)");

    // Recursively process each subfolder
    for (var j = 0; j < children.length; j++) {
        if (children[j].isContainer) {
            generateFolderTree(children[j], currentPath);
        }
    }
}

// Start generating the folder tree from the root folder
logger.log("Folder tree structure for: " + rootFolder.name);
generateFolderTree(rootFolder, "");

// Create or update the CSV file in the output folder
var outputFile = outputFolder.childByNamePath(outputFileName);
if (outputFile == null) {
    outputFile = outputFolder.createFile(outputFileName);
}

outputFile.content = csvContent;
outputFile.save();

logger.log("Folder tree structure saved to: " + outputFile.nodeRef);