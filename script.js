document.addEventListener("DOMContentLoaded", function () {
    const cookieBox = document.getElementById("cookie-box");
    const acceptBtn = document.getElementById("accept-cookies");

    if (cookieBox && acceptBtn) {
        const accepted = localStorage.getItem("cookiesAccepted");

        if (!accepted) {
            cookieBox.style.display = "block";
        }

        acceptBtn.addEventListener("click", function () {
            localStorage.setItem("cookiesAccepted", "true");
            cookieBox.style.display = "none";
        });
    }
});

// Tracking funktion
function trackPackage() {
    const input = document.getElementById("tracking-id");
    const result = document.getElementById("tracking-result");

    if (!input.value) {
        result.textContent = "Indtast venligst et tracking ID.";
        return;
    }

    result.textContent = 
        "📦 Pakke " + input.value + " er under levering med grøn panda-energi 🌱🐼";
}
