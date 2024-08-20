# Alfresco Utility Scripts

This repository contains a collection of scripts designed to interact with the Alfresco content management system. These scripts automate various tasks, including metadata extraction, content searches, bulk downloads, and more. Each script is implemented using Alfresco's REST API and can export results to formats such as CSV or JSON.

## Scripts Overview

### 1. Document Metadata Extraction Script

**Purpose:**  
Extract metadata (e.g., title, author, creation date) from a set of documents within Alfresco and export it to a structured format like CSV or JSON.

**Implementation:**
- Use Alfresco’s REST API to query documents within a specified path or based on certain criteria (e.g., all documents within a folder).
- Retrieve metadata fields such as `cm:title`, `cm:author`, `cm:created`, etc., for each document.
- Write the extracted metadata to a CSV or JSON file.

**Use Case:**  
Useful for generating reports or conducting audits on document properties, such as verifying that all documents have the correct author metadata or were created within a specific timeframe.

### 2. Content Search Script

**Purpose:**  
Perform searches across the Alfresco repository using specific queries (e.g., by document type, keywords, tags).

**Implementation:**
- Use Alfresco’s Query Language (AFTS or CMIS) to construct search queries.
- Run the query via Alfresco’s REST API and collect the results.
- Display the results in a list or export them to a CSV/JSON file.

**Use Case:**  
Helps users quickly find relevant documents based on specific search criteria, such as locating all documents tagged with a specific keyword or finding all PDFs within a certain folder.

### 3. Bulk Download Script

**Purpose:**  
Download multiple documents or entire folders from Alfresco to a local directory.

**Implementation:**
- Use the Alfresco REST API to list documents within a folder.
- Retrieve the content for each document and save it to a local directory, preserving the folder structure.
- Optionally, include error handling to retry or skip failed downloads.

**Use Case:**  
Facilitates the backup of content, enabling the creation of a local copy of important documents or migration to another system.

### 4. Document Version History Extraction Script

**Purpose:**  
Extract and list all versions of a document, including metadata for each version.

**Implementation:**
- Use Alfresco’s REST API to retrieve the version history of a specified document.
- Extract metadata such as `cm:versionLabel`, `cm:creator`, and `cm:created` for each version.
- Export the version history to a CSV or JSON file.

**Use Case:**  
Important for auditing and tracking changes to documents over time, particularly in regulated industries where document version control is critical.

### 5. User Activity Report Script

**Purpose:**  
Generate a report of user activities (e.g., document uploads, modifications, deletions) within a specified time frame.

**Implementation:**
- Use Alfresco’s Audit API to query user activities.
- Filter results by date, user, and type of activity (create, update, delete).
- Export the activity log to a CSV or JSON file.

**Use Case:**  
Useful for monitoring user engagement, detecting unauthorized activities, and ensuring compliance with document handling policies.

### 6. Document Content Extraction Script

**Purpose:**  
Extract the textual content of documents stored in Alfresco (e.g., for indexing or text analysis).

**Implementation:**
- Use Alfresco’s REST API to retrieve document content.
- If the document is in a binary format (e.g., PDF), convert it to text using OCR or another appropriate tool.
- Save the extracted text to a file or index it directly in a search engine.

**Use Case:**  
Useful for creating searchable text indexes or performing content analysis, such as sentiment analysis or keyword extraction.

### 7. Folder Structure Export Script

**Purpose:**  
Export the entire folder structure of a selected Alfresco space or repository to a hierarchical file format (e.g., XML or JSON).

**Implementation:**
- Use Alfresco’s REST API to traverse the folder structure.
- Retrieve metadata such as the folder name, path, and any custom properties for each folder.
- Output the structure in a hierarchical format like XML or JSON.

**Use Case:**  
Useful for documenting the organization of the Alfresco repository, especially before making structural changes or migrating to another system.

### 8. Workflow Status Report Script

**Purpose:**  
Extract the current status of all workflows (e.g., in-progress, completed, canceled) in Alfresco.

**Implementation:**
- Query Alfresco’s Workflow API to retrieve details about all active and completed workflows.
- Extract relevant information such as workflow type, status, assignees, and start/end dates.
- Export the workflow data to a CSV or JSON file.

**Use Case:**  
Helps in tracking the progress and performance of business processes managed through Alfresco workflows, ensuring timely completion of tasks.

### 9. Permission Audit Script

**Purpose:**  
Generate a report on the permissions set for users and groups on specific folders or documents.

**Implementation:**
- Use Alfresco’s REST API to retrieve permissions for each document or folder within a specified path.
- Collect details on which users or groups have access, along with their permission levels (read, write, delete, etc.).
- Export the permissions data to a CSV or JSON file.

**Use Case:**  
Useful for auditing and ensuring that access controls are properly configured, preventing unauthorized access to sensitive documents.

### 10. Document Expiry and Retention Script

**Purpose:**  
Identify documents approaching their retention expiration date or already expired based on metadata fields.

**Implementation:**
- Use Alfresco’s REST API to query documents with retention-related metadata (e.g., `cm:expirationDate`).
- Compare the current date with the expiration date to identify documents that are near or past their expiration.
- Generate a report listing these documents and their retention status.

**Use Case:**  
Ensures compliance with document retention policies and assists in cleaning up old documents to free up storage space.

### 11. Content-Type Distribution Script

**Purpose:**  
Analyze the distribution of content types (e.g., PDFs, Word documents, images) within Alfresco.

**Implementation:**
- Query Alfresco’s REST API to retrieve the MIME types of all documents within a specified path.
- Count the occurrences of each MIME type.
- Generate a summary report or pie chart showing the distribution.

**Use Case:**  
Provides insight into the types of content stored and helps in optimizing storage strategies, such as converting large images or videos to more efficient formats.

### 12. Tag Usage Report Script

**Purpose:**  
Generate a report of tags used across documents in Alfresco, showing frequency and associated documents.

**Implementation:**
- Use Alfresco’s REST API to query documents based on their tags.
- Count the frequency of each tag and list the documents associated with each tag.
- Export the data to a CSV or JSON file.

**Use Case:**  
Useful for understanding how tags are being used for categorization and searchability, which can inform decisions on tag management and cleanup.

### 13. Document Dependency Map Script

**Purpose:**  
Create a map showing relationships between documents (e.g., linked documents, references) within Alfresco.

**Implementation:**
- Use Alfresco’s REST API to identify and list links between documents (e.g., via relationships or associations).
- Represent the relationships in a visual format (e.g., using Graphviz for graph generation) or a JSON file.
- Optionally, include metadata about each link, such as the type of relationship.

**Use Case:**  
Helps in understanding the relationships and dependencies between documents, which is valuable for managing complex documentation or legal contracts.

### 14. Scheduled Report Generation Script

**Purpose:**  
Automate the generation of specific reports (e.g., metadata, user activity) at regular intervals.

**Implementation:**
- Schedule the script to run periodically using a cron job or another scheduler.
- Execute predefined report generation scripts (e.g., metadata extraction, user activity).
- Save the generated reports to a specified location or send them via email.

**Use Case:**  
Useful for periodic monitoring and reporting without manual intervention, ensuring that stakeholders receive up-to-date information regularly.

### 15. Content Health Check Script

**Purpose:**  
Perform a health check on the repository, identifying orphaned files, broken links, or incomplete metadata.

**Implementation:**
- Use Alfresco’s REST API to scan the repository for issues such as orphaned files (files without a parent), broken links, or missing mandatory metadata.
- Generate a report listing the identified issues.
- Optionally, include recommendations for fixing the issues.

**Use Case:**  
Helps maintain the integrity and organization of the Alfresco repository, preventing issues that could affect system performance or compliance.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please see the [CONTRIBUTING](CONTRIBUTING.md) guidelines for more information.

## Contact

For questions or suggestions, please contact [cristina.martin@venzia.es](mailto:cristina.martin@venzia.es).

