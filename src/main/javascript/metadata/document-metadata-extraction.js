/* Extracts metadata from documents and saves it to a CSV file. */

// Configuration
var folderNodeRef = "workspace://SpacesStore/your-folder-node-id"; // Replace with your folder's NodeRef
var outputFolderNodeRef = "workspace://SpacesStore/your-output-folder-node-id"; // Replace with the NodeRef of the folder where the CSV should be saved
var outputFileName = "document_metadata.csv"; // Name of the output CSV file

var folder = search.findNode(folderNodeRef);
var outputFolder = search.findNode(outputFolderNodeRef);

if (folder == null) {
    logger.log("Folder not found: " + folderNodeRef);
    throw "Folder not found: " + folderNodeRef;
}

if (outputFolder == null) {
    logger.log("Output folder not found: " + outputFolderNodeRef);
    throw "Output folder not found: " + outputFolderNodeRef;
}

var metadataList = [];

// Function to extract metadata from a document
function extractMetadata(document) {
    return {
        "Node ID": document.id,
        "Name": document.name,
        "Title": document.properties["cm:title"] || "",
        "Author": document.properties["cm:creator"] || "",
        "Creation Date": document.properties["cm:created"],
        "Modification Date": document.properties["cm:modified"],
        "MIME Type": document.mimetype
    };
}

// Recursive function to process a folder and its subfolders
function processFolder(folder) {
    var children = folder.children;
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.isDocument) {
            var metadata = extractMetadata(child);
            metadataList.push(metadata);
        } else if (child.isContainer) {
            // Recursively process subfolders
            processFolder(child);
        }
    }
}

// Start processing from the root folder
processFolder(folder);

// Generate CSV content
var csvOutput = "Node ID,Name,Title,Author,Creation Date,Modification Date,MIME Type\n";
for (var j = 0; j < metadataList.length; j++) {
    var metadata = metadataList[j];
    csvOutput += metadata["Node ID"] + "," +
                 metadata["Name"] + "," +
                 metadata["Title"] + "," +
                 metadata["Author"] + "," +
                 metadata["Creation Date"] + "," +
                 metadata["Modification Date"] + "," +
                 metadata["MIME Type"] + "\n";
}

// Create or update the CSV file in the output folder
var outputFile = outputFolder.childByNamePath(outputFileName);
if (outputFile == null) {
    outputFile = outputFolder.createFile(outputFileName);
}

outputFile.content = csvOutput;
outputFile.save();

logger.log("Metadata extraction completed. File saved to: " + outputFile.nodeRef);