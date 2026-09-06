import { loadState, markSuspect } from './storage.js';

/**
 * Initializes and renders suspect profiles with interactive suspicion toggles.
 * Persists status in LocalStorage.
 * @param {Array} suspectsData - Array of suspect objects
 */
export function renderSuspects(suspectsData, activeCaseId, onSelect) {
  const container = document.getElementById('suspects-grid');
  if (!container) return;

  const suspiciousList = loadState().suspiciousSuspects;

  container.innerHTML = suspectsData.filter(suspect => suspect.caseId === activeCaseId).map(suspect => {
    const isSuspicious = suspiciousList.includes(suspect.id);
    return `
      <article class="suspect-card ${isSuspicious ? 'marked-suspicious' : ''}" data-id="${suspect.id}">
        <div class="suspect-portrait-wrapper">
          <div class="photo-placeholder" aria-label="${suspect.name} portrait">PHOTO</div>
          <div class="suspect-status-tag">${isSuspicious ? 'SUBJECT OF INTEREST' : 'CLEARED / PENDING'}</div>
        </div>
        <div class="suspect-details">
          <h3 class="suspect-name">${suspect.name}</h3>
          <p class="suspect-role">PERSON OF INTEREST</p>
          <ul class="suspect-meta-list">
            <li><strong>AGE:</strong> ${suspect.age}</li>
            <li><strong>MOTIVE:</strong> ${suspect.motive || 'UNESTABLISHED'}</li>
          </ul>
          <p class="suspect-notes">${suspect.notes || 'No additional investigator notes recorded.'}</p>
          <button class="btn btn-danger btn-toggle-suspicious" data-suspect-id="${suspect.id}">
            ${isSuspicious ? 'REMOVE SUSPICION' : 'MARK AS SUSPICIOUS'}
          </button>
        </div>
      </article>
    `;
  }).join('');

  container.querySelectorAll('.btn-toggle-suspicious').forEach(button => {
    button.addEventListener('click', () => {
      markSuspect(button.dataset.suspectId);
      renderSuspects(suspectsData, activeCaseId, onSelect);
    });
  });
  container.querySelectorAll('.suspect-card').forEach(card => {
    card.addEventListener('click', event => {
      if (!event.target.closest('button')) onSelect?.(card.dataset.id);
    });
  });
}

/**
 * Toggles the suspicious status of a suspect and updates LocalStorage & UI.
 * @param {string} suspectId 
 */
export function toggleSuspicious(suspectId) {
  return markSuspect(suspectId);
}