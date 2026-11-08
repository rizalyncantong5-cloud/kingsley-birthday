
const correctPassword = "111106";

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

function unlockSite() {
    const enteredPassword =
        document.getElementById("passwordInput").value;

    const errorMessage =
        document.getElementById("errorMessage");

    if (enteredPassword === correctPassword) {

        document.getElementById("passwordScreen")
            .classList.add("hidden");

        document.getElementById("welcome")
            .classList.remove("hidden");

        musicButton.classList.remove("hidden");

        errorMessage.textContent = "";

        music.volume = 1;
        music.currentTime = 0;

        music.play()
            .then(() => {
                musicButton.textContent = "🎵 Music: ON";
            })
            .catch((error) => {
                console.log("Music playback error:", error);
                musicButton.textContent = "▶ Play Music";
            });

    } else {
        errorMessage.textContent =
            "Oops! Wrong password. Try again. ♡";
    }
}

document.getElementById("passwordInput")
    .addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            unlockSite();
        }
    });

function toggleMusic() {

    if (music.paused) {

        music.play()
            .then(() => {
                musicButton.textContent = "🎵 Music: ON";
            })
            .catch((error) => {
                console.log("Music playback error:", error);
                musicButton.textContent = "▶ Play Music";
            });

    } else {

        music.pause();
        musicButton.textContent = "▶ Play Music";

    }
}

function openSurprise() {

    document.getElementById("welcome")
        .classList.add("hidden");

    document.getElementById("mainContent")
        .classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
