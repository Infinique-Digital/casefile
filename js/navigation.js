/**
 * CASEFILE - Navigation Module (js/navigation.js)
 * Handles tab switching, section visibility, and persistent tab memory.
 */

import { loadState, saveState } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
});

/**
 * Initializes navigation listeners and sets the active tab based on saved state.
 */
export function initNavigation() {
  const navButtons = document.querySelectorAll('[data-tab-target]');
  const sections = document.querySelectorAll('[data-tab-content]');

  if (navButtons.length === 0 || sections.length === 0) {
    return;
  }

  // Restore active tab from storage or default to first button's target
  const state = loadState();
  const initialTab = state.lastVisitedTab || navButtons[0].dataset.tabTarget;

  switchTab(initialTab, navButtons, sections);

  navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = button.dataset.tabTarget;
      switchTab(targetId, navButtons, sections);

      // Save user tab choice
      const currentState = loadState();
      currentState.lastVisitedTab = targetId;
      saveState(currentState);
    });
  });
}

/**
 * Handles switching active classes and visibility for tab navigation.
 * @param {string} targetTabId - The ID of the target section to show.
 * @param {NodeList} navButtons - List of navigation buttons.
 * @param {NodeList} sections - List of tab content sections.
 */
function switchTab(targetTabId, navButtons, sections) {
  let targetFound = false;

  sections.forEach(section => {
    if (section.id === targetTabId) {
      section.classList.add('is-active');
      section.removeAttribute('hidden');
      targetFound = true;
    } else {
      section.classList.remove('is-active');
      section.setAttribute('hidden', 'true');
    }
  });

  if (!targetFound && sections.length > 0) {
    // Fallback to first section if target tab is missing
    sections[0].classList.add('is-active');
    sections[0].removeAttribute('hidden');
    targetTabId = sections[0].id;
  }

  navButtons.forEach(button => {
    if (button.dataset.tabTarget === targetTabId) {
      button.classList.add('is-active');
      button.setAttribute('aria-selected', 'true');
    } else {
      button.classList.remove('is-active');
      button.setAttribute('aria-selected', 'false');
    }
  });
}