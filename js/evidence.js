import { loadState } from './storage.js';

/**
 * Renders every evidence item for the active case into the designated container.
 * Reads data from window.CASEFILE_DATA or LocalStorage.
 * @param {Array} evidenceData - Array of evidence objects
 */
export function renderEvidence(evidenceData, activeCaseId) {
  const container = document.getElementById('evidence-grid');
  if (!container) return;

  const state = loadState();
  const unlockedIds = Array.isArray(state.unlockedEvidence) ? state.unlockedEvidence : [];
  const itemsToRender = evidenceData.filter(item => item.caseId === activeCaseId);

  if (itemsToRender.length === 0) {
    container.innerHTML = `<div class="empty-state">NO EVIDENCE LOGGED IN ARCHIVE.</div>`;
    return;
  }


  container.innerHTML = itemsToRender.map(item => {
    const isLocked = Boolean(item.unlockCondition) && !unlockedIds.includes(item.id);
    const status = isLocked ? 'ARCHIVE LOCKED - VERIFY FIRST' : item.unlockCondition ? 'FILE OPENED' : 'AVAILABLE';

    return `
    <article class="card evidence-card${isLocked ? ' is-locked' : ''}" data-id="${item.id}">
      <header class="evidence-header">
        <span class="evidence-id">${item.id}</span>
        <span class="evidence-type">${item.type.toUpperCase()}</span>
      </header>
      <div class="evidence-body">
        <h3 class="evidence-title">${item.name}</h3>
        <p class="evidence-desc">${item.description}</p>
        <span class="evidence-status">${status}</span>
        ${isLocked ? '' : `<a class="btn btn-accent evidence-open" href="evidence.html?case=${encodeURIComponent(activeCaseId)}&evidence=${encodeURIComponent(item.id)}">OPEN EVIDENCE</a>`}
      </div>
      <footer class="evidence-footer">
        <span class="evidence-meta">LOC: ${item.locationFound || 'UNKNOWN'}</span>
        <span class="evidence-meta">DATE: ${item.dateAcquired || 'N/A'}</span>
      </footer>
    </article>
  `;
  }).join('');
}