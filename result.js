import { cases } from '../data/case.js';

const params = new URLSearchParams(window.location.search);
const activeCaseId = params.get('case') || window.CasefileStorage.getActiveCaseId() || cases[0].id;
const activeCase = cases.find((currentCase) => currentCase.id === activeCaseId);

if (!activeCase) {
    throw new Error(`Casefile: unable to load case "${activeCaseId}".`);
}

const outcome = params.get('outcome');
const heading = document.querySelector('#result-heading');
const narrative = document.querySelector('#result-narrative');
const accuracy = document.querySelector('#metric-accuracy');

heading.textContent = `${activeCase.title} // ${outcome === 'correct' ? 'CORRECT' : outcome === 'incorrect' ? 'INCORRECT' : 'FINAL REVIEW'}`;
narrative.textContent = outcome === 'correct'
    ? 'The final accusation matches the verified case record.'
    : outcome === 'incorrect'
        ? 'The final accusation does not match the verified case record.'
        : 'The investigation system has submitted this case for final accusation review.';
accuracy.textContent = outcome === 'correct' || outcome === 'incorrect'
    ? outcome.toUpperCase()
    : 'PENDING';
accuracy.classList.toggle('success', outcome === 'correct');
accuracy.classList.toggle('failure', outcome === 'incorrect');

document.querySelector('#btn-return-dashboard').addEventListener('click', () => {
    window.location.href = 'cases.html';
});
