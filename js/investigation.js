import { cases } from '../data/case.js';
import { suspects } from '../data/suspects.js';
import { evidence } from '../data/evidence.js';
import { initNavigation } from './navigation.js';
import { renderEvidence } from './evidence.js';
import { renderSuspects } from './suspects.js';
import { renderTimeline } from './timeline.js';
import { PuzzleSystem } from './puzzles.js';
import { evaluateAccusation } from './accusation.js';
import { getActiveCaseId, loadState, setActiveCaseId, setPuzzleComplete, setSelectedAccusation, unlockEvidence } from './storage.js';

const params = new URLSearchParams(window.location.search);
const activeCaseId = params.get('case') || getActiveCaseId() || cases[0].id;
const activeCase = cases.find(item => item.id === activeCaseId);

if (!activeCase) {
    throw new Error(`Casefile: unable to load case "${activeCaseId}".`);
}

setActiveCaseId(activeCase.id);
const caseSuspects = suspects.filter(item => item.caseId === activeCase.id);
const caseEvidence = evidence.filter(item => item.caseId === activeCase.id);

document.querySelector('#case-id').textContent = activeCase.id;
document.querySelector('#case-title').textContent = activeCase.title;
document.querySelector('#case-description').textContent = activeCase.incidentDescription;

const clock = document.querySelector('#system-clock');
const updateClock = () => { clock.textContent = new Date().toLocaleTimeString('en-GB', { hour12: false }); };
updateClock();
window.setInterval(updateClock, 1000);

initNavigation();
renderSuspects(suspects, activeCase.id, suspectId => {
    document.querySelector('#accused-suspect').value = suspectId;
});
renderEvidence(evidence, activeCase.id);
renderTimeline(caseEvidence.map((item, index) => ({
    id: item.id,
    order: index,
    displayTime: `EVIDENCE ${String(index + 1).padStart(2, '0')}`,
    location: item.type.toUpperCase(),
    title: item.name,
    description: item.description,
    relatedEvidenceId: null
})));

const suspectSelect = document.querySelector('#accused-suspect');
const evidenceSelect = document.querySelector('#supporting-evidence');
suspectSelect.innerHTML = caseSuspects.map(item => `<option value="${item.id}">${item.name}</option>`).join('');
evidenceSelect.innerHTML = caseEvidence.map(item => `<option value="${item.id}">${item.name}</option>`).join('');
const state = loadState();
if (state.selectedSuspectId) suspectSelect.value = state.selectedSuspectId;
if (state.selectedEvidenceId) evidenceSelect.value = state.selectedEvidenceId;

document.querySelector('#archive-verification').addEventListener('submit', event => {
    event.preventDefault();
    const input = document.querySelector('#puzzle-input').value;
    const feedback = document.querySelector('#puzzle-feedback');
    if (PuzzleSystem.verifyPassword(activeCase.id, input)) {
        caseEvidence.forEach(item => {
            if (item.unlockCondition) {
                setPuzzleComplete(item.unlockCondition);
                unlockEvidence(item.id);
            }
        });
        feedback.textContent = 'ARCHIVE VERIFIED. REVIEW THE EVIDENCE TAB.';
        renderEvidence(evidence, activeCase.id);
    } else {
        feedback.textContent = 'VERIFICATION FAILED. CHECK THE CASE IDENTIFIER.';
    }
});

document.querySelector('#submit-accusation').addEventListener('click', () => {
    const suspectId = suspectSelect.value;
    const evidenceId = evidenceSelect.value;
    setSelectedAccusation(suspectId, evidenceId);
    const outcome = evaluateAccusation(activeCase.id, suspectId, evidenceId) ? 'correct' : 'incorrect';
    window.location.href = `result.html?case=${encodeURIComponent(activeCase.id)}&outcome=${outcome}`;
});
