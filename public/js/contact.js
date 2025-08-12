document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        contactForm.reset();
    });

    const issueSelect = document.getElementById('issueSelect');
    const otherIssueInput = document.getElementById('otherIssue');

    issueSelect.addEventListener('change', function() {
        if (issueSelect.value === 'other') {
            otherIssueInput.style.display = 'block';
        } else {
            otherIssueInput.style.display = 'none';
        }
    });
});
