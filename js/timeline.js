// js/timeline.js

/**
 * Renders chronological event log for the investigation.
 * @param {Array} timelineData - Array of timeline event objects
 */
function renderTimeline(timelineData) {
  const container = document.getElementById('timeline-list');
  if (!container) return;

  const sortedEvents = [...timelineData].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  if (sortedEvents.length === 0) {
    container.innerHTML = `<div class="empty-state">NO TIMELINE ENTRIES LOGGED.</div>`;
    return;
  }

  container.innerHTML = `
    <div class="timeline-track">
      ${sortedEvents.map(event => `
        <div class="timeline-entry" data-id="${event.id}">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
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

/**
 * Main Navigation and Dashboard Tab Switching Controller
 */
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('[data-tab-target]');
  const tabContents = document.querySelectorAll('.tab-content');

  function switchTab(targetId) {
    tabButtons.forEach(btn => {
      if (btn.dataset.tabTarget === targetId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    tabContents.forEach(content => {
      if (content.id === targetId) {
        content.classList.add('active');
        content.style.opacity = '0';
        setTimeout(() => {
          content.style.opacity = '1';
        }, 10);
      } else {
        content.classList.remove('active');
      }
    });

    localStorage.setItem('casefile_active_tab', targetId);
  }

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.tabTarget;
      switchTab(targetId);
    });
  });

  const savedTab = localStorage.getItem('casefile_active_tab') || 'tab-evidence';
  const initialTabExists = document.getElementById(savedTab);
  switchTab(initialTabExists ? savedTab : 'tab-evidence');
});