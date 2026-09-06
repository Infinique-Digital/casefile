/**
 * CASEFILE: PUZZLE VERIFICATION SYSTEM
 * Handles logical checks for locks, decryption sequences, and timeline reconstructions.
 */

export const PuzzleSystem = {
    /**
     * Verifies a standard text or numeric password.
     * @param {string|number} expectedPassword - The correct answer.
     * @param {string|number} playerInput - The user's input.
     * @returns {boolean} True if the input matches the expected password.
     */
    verifyPassword: function(expectedPassword, playerInput) {
        if (expectedPassword === undefined || playerInput === undefined) return false;
        
        // Normalize strings for case-insensitive and trim-safe comparison
        const normalizedExpected = expectedPassword.toString().trim().toLowerCase();
        const normalizedInput = playerInput.toString().trim().toLowerCase();
        
        return normalizedExpected === normalizedInput;
    },

    /**
     * Verifies if a series of events/items are placed in the correct chronological order.
     * @param {Array<string>} expectedOrder - Array of IDs in the correct order.
     * @param {Array<string>} playerOrder - Array of IDs as arranged by the player.
     * @returns {boolean} True if the arrays match exactly.
     */
    verifyTimeline: function(expectedOrder, playerOrder) {
        if (!Array.isArray(expectedOrder) || !Array.isArray(playerOrder)) return false;
        if (expectedOrder.length !== playerOrder.length) return false;
        
        return expectedOrder.every((itemId, index) => itemId === playerOrder[index]);
    },

    /**
     * Validates a multi-stage cipher or complex lock (e.g., 3-dial combination).
     * @param {Array<string|number>} expectedState - The correct state of all dials/inputs.
     * @param {Array<string|number>} playerState - The player's current dial/input state.
     * @returns {boolean} True if all states match.
     */
    verifyComplexLock: function(expectedState, playerState) {
        if (!Array.isArray(expectedState) || !Array.isArray(playerState)) return false;
        if (expectedState.length !== playerState.length) return false;

        return expectedState.every((state, index) => {
            return state.toString().trim().toLowerCase() === playerState[index].toString().trim().toLowerCase();
        });
    }
};