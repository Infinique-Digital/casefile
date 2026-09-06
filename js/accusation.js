/**
 * CASEFILE: ACCUSATION EVALUATION MODULE
 * Cross-references the player's final deductive choices against the official case resolution matrix.
 */

import { cases } from '../data/case.js';

/**
 * Evaluates the player's final accusation.
 * 
 * @param {string} activeCaseId - The ID of the current case being investigated.
 * @param {string} selectedSuspectId - The ID of the suspect the player is accusing.
 * @param {string} selectedEvidenceId - The ID of the primary evidence the player is submitting.
 * @returns {boolean} True if both the suspect and evidence match the correct resolution.
 */
export function evaluateAccusation(activeCaseId, selectedSuspectId, selectedEvidenceId) {
    // Ensure the case exists in the database
    const currentCase = cases.find(c => c.id === activeCaseId);
    
    if (!currentCase) {
        console.error(`SYS_ERR: Archive query failed. Case ${activeCaseId} does not exist.`);
        return false;
    }

    const solution = currentCase.solution;

    if (!solution) {
        console.error(`SYS_ERR: Resolution matrix missing for ${activeCaseId}.`);
        return false;
    }

    // Determine accuracy
    const isSuspectCorrect = (solution.culpritId === selectedSuspectId);
    const isEvidenceCorrect = (solution.evidenceId === selectedEvidenceId);

    // Both suspect and critical evidence must be correct to secure a conviction
    const isAccusationSuccessful = isSuspectCorrect && isEvidenceCorrect;

    // Log to internal console (simulating terminal output)
    if (isAccusationSuccessful) {
        console.log("SYS_MSG: Accusation verified. Warrants issued.");
    } else {
        console.warn("SYS_WARN: Accusation denied. Deductive anomalies detected.");
    }

    return isAccusationSuccessful;
}