import { cases } from '../data/case.js';
import { getActiveCaseId, setActiveCaseId } from './storage.js';

const params = new URLSearchParams(window.location.search);
const requestedCaseId = params.get('case') || getActiveCaseId() || cases[0].id;
const activeCase = cases.find((currentCase) => currentCase.id === requestedCaseId);

if (!activeCase) {
    throw new Error(`Casefile: unable to load case "${requestedCaseId}".`);
}

setActiveCaseId(activeCase.id);

document.querySelector('#case-title').textContent = activeCase.title;
document.querySelector('#case-id').textContent = activeCase.id;
document.querySelector('#case-location').textContent = activeCase.location;
document.querySelector('#case-description').textContent = activeCase.incidentDescription;
document.querySelector('#case-objective').textContent =
    `Identify the responsible party and establish the evidence chain for ${activeCase.title}.`;

const clock = document.querySelector('#system-clock');
const updateClock = () => {
    clock.textContent = new Date().toLocaleTimeString('en-GB', { hour12: false });
};
updateClock();
window.setInterval(updateClock, 1000);

document.querySelector('#btn-begin-investigation').addEventListener('click', () => {
    window.location.href = `investigation.html?case=${encodeURIComponent(activeCase.id)}`;
});
