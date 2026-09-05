// js/evidence.js

/**
 * Renders the unlocked evidence items into the designated container.
 * Reads data from window.CASEFILE_DATA or LocalStorage.
 * @param {Array} evidenceData - Array of evidence objects
 */
function renderEvidence(evidenceData) {
  const container = document.getElementById('evidence-grid');
  if (!container) return;

  const unlockedIds = JSON.parse(localStorage.getItem('casefile_unlocked_evidence') || '[]');
  const itemsToRender = evidenceData.filter(item => unlockedIds.includes(item.id) || item.defaultUnlocked);

  if (itemsToRender.length === 0) {
    container.innerHTML = `<div class="empty-state">NO EVIDENCE LOGGED IN ARCHIVE.</div>`;
    return;
  }

  container.innerHTML = itemsToRender.map(item => `
    <article class="evidence-card" data-id="${item.id}">
      <header class="evidence-header">
        <span class="evidence-id">${item.id}</span>
        <span class="evidence-type">${item.type.toUpperCase()}</span>
      </header>
      <div class="evidence-body">
        <h3 class="evidence-title">${item.title}</h3>
        <p class="evidence-desc">${item.description}</p>
        ${item.imageUrl ? `<img src="${item.imageUrl}" alt="${item.title}" class="evidence-thumb" />` : ''}
      </div>
      <footer class="evidence-footer">
        <span class="evidence-meta">LOC: ${item.locationFound || 'UNKNOWN'}</span>
        <span class="evidence-meta">DATE: ${item.dateAcquired || 'N/A'}</span>
      </footer>
    </article>
  `).join('');
}