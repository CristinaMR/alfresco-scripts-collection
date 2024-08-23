
# Alfresco Utility Scripts

This repository contains a collection of scripts designed to interact with the Alfresco content management system. These scripts automate various tasks, including metadata extraction, content searches, audits, and more. Each script is implemented using Alfresco's REST API and can export results to formats such as CSV or JSON.

## Scripts Overview

### 1. Content Health Check Script

**Function:**  
Performs a health check on content in the Alfresco repository, identifying issues like orphaned files, broken links, or incomplete metadata.

### 2. Permission Audit Script

**Function:**  
Audits the permissions configured on a directory or document, listing access rights assigned to users and groups.

### 3. User Activity Report Script

**Function:**  
Generates a report of user activities over a specified period, such as creating, modifying, or deleting documents.

### 4. Document Dependency Map Script

**Function:**  
Creates a map showing dependencies between documents in Alfresco, illustrating relationships between linked documents.

### 5. Folder Tree Structure Report Script

**Function:**  
Generates a tree structure of a specific folder, including details for each folder such as "folder name", "number of child folders", and "number of documents". The script also outputs the tree in a visual hierarchy and saves this information in a CSV file.

### 6. Content-Type Distribution Script

**Function:**  
Analyzes the distribution of content types (such as PDFs, Word documents, images) within an Alfresco directory, providing a report of the different file types stored.

### 7. Document Content Extraction Script

**Function:**  
Extracts the textual content from a document stored in Alfresco, useful for analysis or indexing.

### 8. Document Metadata Extraction Script

**Function:**  
Extracts metadata (such as title, author, creation date) from documents in an Alfresco directory and saves it to a CSV file.

### 9. Document Version History Extraction Script

**Function:**  
Extracts and lists the version history of a specific document, showing details like creation date and the user who made changes.

### 10. Document Expiry and Retention Script

**Function:**  
Identifies documents that are nearing their expiration date or have already expired, based on configured retention metadata.

### 11. Content Search Script

**Function:**  
Performs searches for documents in the Alfresco repository using queries based on regular expressions or specific criteria.

### 12. Tag Usage Report Script

**Function:**  
Generates a report on tag usage across documents in Alfresco, showing the frequency of each tag and associated documents.

### 13. Workflow Status Report Script

**Function:**  
Generates a report on the current status of all workflows in the system, showing information like status, start date, and due date.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please see the [CONTRIBUTING](CONTRIBUTING.md) guidelines for more information.