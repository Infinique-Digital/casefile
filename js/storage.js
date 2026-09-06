/**
 * CASEFILE - Storage Module (js/storage.js)
 * Manages game state, unlocked evidence, suspect status, and notes via LocalStorage.
 */

const STORAGE_KEY = 'CASEFILE_GAME_STATE';
const ACTIVE_CASE_KEY = 'casefile.activeCaseId';

const defaultState = {
  activeCaseId: null,
  unlockedEvidence: [],
  suspiciousSuspects: [],
  suspects: {},
  notes: "",
  puzzleProgress: {},
  lastVisitedTab: "overview",
  selectedSuspectId: null,
  selectedEvidenceId: null
};

/**
 * Retrieves the current state from LocalStorage or returns default state.
 * @returns {Object} Current game state.
 */
export function loadState() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? { ...defaultState, ...JSON.parse(data) } : { ...defaultState };
  } catch (e) {
    console.error("CASEFILE: Failed to load state from LocalStorage.", e);
    return { ...defaultState };
  }
}

/**
 * Saves the given state object to LocalStorage.
 * @param {Object} state - The game state to persist.
 */
export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("CASEFILE: Failed to save state to LocalStorage.", e);
  }
}

export function getActiveCaseId() {
    return loadState().activeCaseId || localStorage.getItem(ACTIVE_CASE_KEY);
  }

export function setActiveCaseId(caseId) {
    const state = loadState();
    state.activeCaseId = caseId;
    state.lastVisitedTab = "overview";
    saveState(state);
    localStorage.setItem(ACTIVE_CASE_KEY, caseId);
  }

export function setSelectedAccusation(suspectId, evidenceId) {
    const state = loadState();
    state.selectedSuspectId = suspectId;
    state.selectedEvidenceId = evidenceId;
    saveState(state);
  }

export function setPuzzleComplete(puzzleId) {
    const state = loadState();
    state.puzzleProgress[puzzleId] = true;
    saveState(state);
  }

export function markSuspect(suspectId) {
    const state = loadState();
    state.suspiciousSuspects = state.suspiciousSuspects.includes(suspectId)
      ? state.suspiciousSuspects.filter(id => id !== suspectId)
      : [...state.suspiciousSuspects, suspectId];
    saveState(state);
    return state.suspiciousSuspects;
}

/**
 * Unlocks an evidence ID if it has not already been unlocked.
 * @param {string} evidenceId 
 */
export function unlockEvidence(evidenceId) {
  const state = loadState();
  if (!state.unlockedEvidence.includes(evidenceId)) {
    state.unlockedEvidence.push(evidenceId);
    saveState(state);
  }
}

/**
 * Checks if an evidence ID is unlocked.
 * @param {string} evidenceId 
 * @returns {boolean}
 */
export function isEvidenceUnlocked(evidenceId) {
  const state = loadState();
  return state.unlockedEvidence.includes(evidenceId);
}

/**
 * Updates status or notes for a given suspect.
 * @param {string} suspectId 
 * @param {Object} data - e.g. { status: "cleared" | "suspect" | "prime", notes: "..." }
 */
export function updateSuspect(suspectId, data) {
  const state = loadState();
  state.suspects[suspectId] = {
    ...state.suspects[suspectId],
    ...data
  };
  saveState(state);
}

/**
 * Updates investigator general notes.
 * @param {string} notesText 
 */
export function saveNotes(notesText) {
  const state = loadState();
  state.notes = notesText;
  saveState(state);
}

/**
 * Resets all progress back to default state.
 */
export function clearState() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error("CASEFILE: Failed to clear state from LocalStorage.", e);
  }
}