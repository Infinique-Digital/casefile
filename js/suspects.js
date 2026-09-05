// js/suspects.js

/**
 * Initializes and renders suspect profiles with interactive suspicion toggles.
 * Persists status in LocalStorage.
 * @param {Array} suspectsData - Array of suspect objects
 */
function renderSuspects(suspectsData) {
  const container = document.getElementById('suspects-grid');
  if (!container) return;

  const suspiciousList = JSON.parse(localStorage.getItem('casefile_suspicious_ids') || '[]');

  container.innerHTML = suspectsData.map(suspect => {
    const isSuspicious = suspiciousList.includes(suspect.id);
    return `
      <article class="suspect-card ${isSuspicious ? 'marked-suspicious' : ''}" data-id="${suspect.id}">
        <div class="suspect-portrait-wrapper">
          <img src="${suspect.photoUrl || 'assets/placeholder-suspect.png'}" alt="${suspect.name}" class="suspect-portrait" />
          <div class="suspect-status-tag">${isSuspicious ? 'SUBJECT OF INTEREST' : 'CLEARED / PENDING'}</div>
        </div>
        <div class="suspect-details">
          <h3 class="suspect-name">${suspect.name}</h3>
          <p class="suspect-role">${suspect.role}</p>
          <ul class="suspect-meta-list">
            <li><strong>AGE:</strong> ${suspect.age}</li>
            <li><strong>ALIBI:</strong> ${suspect.alibi}</li>
            <li><strong>MOTIVE:</strong> ${suspect.motive || 'UNESTABLISHED'}</li>
          </ul>
          <p class="suspect-notes">${suspect.notes}</p>
          <button class="btn-toggle-suspicious" onclick="toggleSuspicious('${suspect.id}')">
            ${isSuspicious ? 'REMOVE SUSPICION' : 'MARK AS SUSPICIOUS'}
          </button>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Toggles the suspicious status of a suspect and updates LocalStorage & UI.
 * @param {string} suspectId 
 */
function toggleSuspicious(suspectId) {
  let suspiciousList = JSON.parse(localStorage.getItem('casefile_suspicious_ids') || '[]');
  
  if (suspiciousList.includes(suspectId)) {
    suspiciousList = suspiciousList.filter(id => id !== suspectId);
  } else {
    suspiciousList.push(suspectId);
  }

  localStorage.setItem('casefile_suspicious_ids', JSON.stringify(suspiciousList));
  
  if (window.CASEFILE_DATA && window.CASEFILE_DATA.suspects) {
    renderSuspects(window.CASEFILE_DATA.suspects);
  }
}