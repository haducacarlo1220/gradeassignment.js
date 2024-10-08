function gradeAssignment() {
    let score = prompt("Enter your score:");

    score = Number(score);

    if (score >= 90) {
    alert("Excellent");
    } else if (score >= 80) {
    alert("Good");
    } else if (score >= 70) {
    alert("Fair");
    } else {
    alert("Needs Improvement");
    }
}
