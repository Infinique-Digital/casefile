import { cases } from '../data/case.js';
import { evidence } from '../data/evidence.js';
import { getActiveCaseId, isEvidenceUnlocked } from './storage.js';

const params = new URLSearchParams(window.location.search);
const caseId = params.get('case') || getActiveCaseId();
const evidenceId = params.get('evidence');
const activeCase = cases.find(item => item.id === caseId);
const activeEvidence = evidence.find(item => item.caseId === caseId && item.id === evidenceId);

if (!activeCase || !activeEvidence) {
    throw new Error('Casefile: unable to load the requested evidence record.');
}

if (activeEvidence.unlockCondition && !isEvidenceUnlocked(activeEvidence.id)) {
    window.location.replace(`investigation.html?case=${encodeURIComponent(activeCase.id)}`);
} else {
    document.title = `CASEFILE // ${activeEvidence.id}`;
    document.querySelector('#evidence-id').textContent = activeEvidence.id;
    document.querySelector('#evidence-title').textContent = activeEvidence.name;
    document.querySelector('#evidence-type').textContent = activeEvidence.type.toUpperCase();
    document.querySelector('#evidence-description').textContent = activeEvidence.description;
    document.querySelector('#back-to-investigation').href = `investigation.html?case=${encodeURIComponent(activeCase.id)}`;
}
