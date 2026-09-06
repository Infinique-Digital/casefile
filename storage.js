(function () {
    const ACTIVE_CASE_KEY = "casefile.activeCaseId";

    window.CasefileStorage = {
        getActiveCaseId: function () {
            return window.sessionStorage.getItem(ACTIVE_CASE_KEY);
        },
        setActiveCaseId: function (caseId) {
            window.sessionStorage.setItem(ACTIVE_CASE_KEY, caseId);
        }
    };
}());
