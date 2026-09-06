/**
 * CASEFILE: ACCUSATION EVALUATION MODULE
 * Cross-references the player's final deductive choices against the official case resolution matrix.
 */

import { cases } from '../data/case.js';

/**
 * Because the cases array in `case.js` does not natively store the classified solutions 
 * (to prevent easy cheating via console inspection of the case object), the resolution 
 * matrix is stored securely within this evaluation module.
 */
const resolutionMatrix = {
    "CASE-001": { culpritId: "SUS-102", evidenceId: "EVD-104" }, // Eleanor Vance + Cryptic Note
    "CASE-002": { culpritId: "SUS-204", evidenceId: "EVD-203" }, // Carmine Falcone + Offshore Records
    "CASE-003": { culpritId: "SUS-301", evidenceId: "EVD-302" }, // Arthur Pendelton + Maintenance Logs
    "CASE-004": { culpritId: "SUS-403", evidenceId: "EVD-403" }, // Max 'Static' Keller + Cassette Tape
    "CASE-005": { culpritId: "SUS-503", evidenceId: "EVD-504" }, // Richard Sterling + Drone Log
    "CASE-006": { culpritId: "SUS-602", evidenceId: "EVD-604" }  // Director Vance + Redacted File
};

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

    const solution = resolutionMatrix[activeCaseId];

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