document.addEventListener("DOMContentLoaded", function () {
    // Konfeti
    const confettiContainer = document.createElement("div");
    confettiContainer.classList.add("confetti-container");
    document.body.appendChild(confettiContainer);

    function createConfettiPiece() {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-10vh";
        const size = Math.random() * 10 + 5;
        confetti.style.width = size + "px";
        confetti.style.height = size * 1.5 + "px";
        const colors = ["#ff0000", "#00ff00", "#ffff00", "#ff00ff", "#00ffff", "#ff9900"];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        const duration = Math.random() * 3 + 3;
        confetti.style.animationDuration = duration + "s";
        confettiContainer.appendChild(confetti);
        setTimeout(() => confetti.remove(), duration * 1000);
    }
    setInterval(createConfettiPiece, 100);

    // Modal hadiah
    const winners = document.querySelectorAll(".winner-box");
    const modal = document.getElementById("prize-modal");
    const prizeTitle = document.getElementById("prize-title");
    const prizeMessage = document.getElementById("prize-message");
    const closeBtn = document.querySelector(".close");

    // Pastikan elemen modal ada sebelum memberikan event listener
    if (modal && prizeTitle && prizeMessage && closeBtn) {
        const prizes = {
            "first": { title: "Juara 1", message: "Selamat! Kamu mendapatkan Laptop Gaming 🎁" },
            "second": { title: "Juara 2", message: "Keren! Kamu mendapatkan Smartphone terbaru 📱" },
            "third": { title: "Juara 3", message: "Hebat! Kamu mendapatkan Smartwatch keren ⌚" }
        };

        winners.forEach(box => {
            box.addEventListener("click", function () {
                const prizeClass = this.classList[1];
                const prizeData = prizes[prizeClass];
                if (prizeData) {
                    prizeTitle.innerText = prizeData.title;
                    prizeMessage.innerText = prizeData.message;
                    modal.style.display = "flex";
                }
            });
        });

        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    } else {
        console.error("Elemen modal atau tombol close tidak ditemukan di HTML.");
    }
});
