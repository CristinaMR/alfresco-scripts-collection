/* Generates a report on the current status of all workflows in the system. */

// Retrieve all workflows
var workflows = workflow.getAllWorkflows();
logger.log("Found " + workflows.length + " workflows.");

// Output workflow status
for (var i = 0; i < workflows.length; i++) {
    var wf = workflows[i];
    logger.log("Workflow: " + wf.name + ", Status: " + wf.state + ", Started: " + wf.startDate + ", Due: " + wf.dueDate);
}