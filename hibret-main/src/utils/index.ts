
export function checkIfUserCanUpdateWorkflow(user, document, newRole) {
    if (!user || !document || !newRole) {
        return false;
    }
    const currentStepIndex = document.workflowPath.findIndex(step => step.role === user.role);

    if (currentStepIndex === -1) {
        return false;
    }

    const currentStep = document.workflowPath[currentStepIndex];
    if (currentStep.status !== 'Pending') {
        return false;
    }
    return true;
}

export function updateWorkflowPath(workflowPath, role, status) {
    const updatedWorkflowPath = workflowPath.map(step => {
        if (step.role === role) {
            return { ...step, status };
        }
        return step;
    });
    return updatedWorkflowPath;
}
