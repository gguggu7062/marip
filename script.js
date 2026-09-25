function checkCode() {
    const code = Number(document.getElementById("codeInput").value);

    if (code === 1416) {
        window.location.href = "sion.html";
    }
    else if (code === 1818) {
        window.location.href = "gain.html";
    }
    else if (code === 8593) {
        window.location.href = "junghee.html";
    }
    else if (code === 1111) {
        window.location.href = "yeram.html";
    }
    else {
        document.getElementById("error").textContent =
            "please enter right code";
    }
}