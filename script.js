document.addEventListener("DOMContentLoaded", function () {
    fetch("text%20files/cpu.txt")
        .then(response => response.text())
        .then(data => {
            document.getElementById('text-content').textContent = data;
        })
        .catch(error => console.error("Fetch error:", error));
});