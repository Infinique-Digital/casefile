import { loadState } from './storage.js';

/**
 * Renders the unlocked evidence items into the designated container.
 * Reads data from window.CASEFILE_DATA or LocalStorage.
 * @param {Array} evidenceData - Array of evidence objects
 */
export function renderEvidence(evidenceData, activeCaseId) {
  const container = document.getElementById('evidence-grid');
  if (!container) return;

  const state = loadState();
  const unlockedIds = state.unlockedEvidence;
  const itemsToRender = evidenceData.filter(item => item.caseId === activeCaseId);

  if (itemsToRender.length === 0) {
    container.innerHTML = `<div class="empty-state">NO EVIDENCE LOGGED IN ARCHIVE.</div>`;
    return;
  }

  container.innerHTML = itemsToRender.map(item => `
    <article class="card evidence-card${item.unlockCondition && !unlockedIds.includes(item.id) ? ' evidence-locked' : ''}" data-id="${item.id}">
      <header class="evidence-header">
        <span class="evidence-id">${item.id}</span>
        <span class="evidence-type">${item.type.toUpperCase()}</span>
      </header>
      <div class="evidence-body">
        <h3 class="evidence-title">${item.name}</h3>
        <p class="evidence-desc">${item.description}</p>
        ${item.unlockCondition
          ? unlockedIds.includes(item.id)
            ? '<span class="evidence-status">FILE OPENED</span>'
            : '<span class="evidence-status evidence-status-locked">ARCHIVE LOCKED - VERIFY FIRST</span>'
          : ''}
      </div>
      <footer class="evidence-footer">
        <span class="evidence-meta">LOC: ${item.locationFound || 'UNKNOWN'}</span>
        <span class="evidence-meta">DATE: ${item.dateAcquired || 'N/A'}</span>
      </footer>
    </article>
  `).join('');

}