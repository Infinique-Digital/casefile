// js/timeline.js

/**
 * Renders chronological event log for the investigation.
 * @param {Array} timelineData - Array of timeline event objects
 */
export function renderTimeline(timelineData) {
  const container = document.getElementById('timeline-list');
  if (!container) return;

  const sortedEvents = [...timelineData].sort((a, b) => a.order - b.order);

  if (sortedEvents.length === 0) {
    container.innerHTML = `<div class="empty-state">NO TIMELINE ENTRIES LOGGED.</div>`;
    return;
  }

  container.innerHTML = `
    <div class="timeline-track">
      ${sortedEvents.map(event => `
        <div class="timeline-item" data-id="${event.id}">
          <div class="timeline-marker"></div>
          <div class="card timeline-card">
            <header class="timeline-header">
              <time class="timeline-time">${event.displayTime}</time>
              <span class="timeline-location">${event.location}</span>
            </header>
            <h4 class="timeline-title">${event.title}</h4>
            <p class="timeline-desc">${event.description}</p>
            ${event.relatedEvidenceId ? `<span class="timeline-link">REF EVIDENCE: ${event.relatedEvidenceId}</span>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}
