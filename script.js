const intro = document.getElementById("intro");
const envelopeScreen = document.getElementById("envelopeScreen");

const openButton = document.getElementById("openButton");
const readButton = document.getElementById("readButton");

const envelope = document.getElementById("envelope");

const mainContent = document.getElementById("mainContent");

const music = document.getElementById("music");

const yesButton = document.getElementById("yesButton");
const alsoYesButton = document.getElementById("alsoYesButton");

const finalSection = document.getElementById("final");

const heartsContainer = document.getElementById("hearts-container");

// =========================================
// OPEN INTRO
// =========================================

openButton.addEventListener("click", () => {
  createHeartExplosion();

  try {
    music.volume = 0.35;
    music.play();
  } catch (error) {
    console.log("Music belum dapat dimainkan.");
  }

  intro.classList.remove("active");

  setTimeout(() => {
    intro.style.display = "none";

    envelopeScreen.classList.add("active");
  }, 900);
});

// =========================================
// OPEN ENVELOPE
// =========================================

readButton.addEventListener("click", () => {
  envelopeScreen.style.opacity = "0";

  setTimeout(() => {
    envelopeScreen.style.display = "none";

    mainContent.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    startHeartRain();
  }, 1000);
});

// =========================================
// ENVELOPE ANIMATION
// =========================================

envelope.addEventListener("click", () => {
  if (envelope.classList.contains("open")) {
    return;
  }

  envelope.classList.add("open");

  createHeartExplosion();

  setTimeout(() => {
    readButton.classList.remove("hidden");
  }, 1000);
});

// =========================================
// HEART CLICK EFFECT
// =========================================

document.addEventListener("click", (event) => {
  const heart = document.createElement("div");

  heart.className = "floating-heart";

  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

  heart.style.left = `${event.clientX}px`;

  heart.style.top = `${event.clientY}px`;

  heart.style.fontSize = `${12 + Math.random() * 20}px`;

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
});

// =========================================
// HEART EXPLOSION
// =========================================

function createHeartExplosion() {
  for (let i = 0; i < 18; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");

      heart.className = "floating-heart";

      heart.textContent = Math.random() > 0.5 ? "❤️" : "♡";

      heart.style.left = `${45 + Math.random() * 10}%`;

      heart.style.top = `${45 + Math.random() * 10}%`;

      heart.style.transform = `translate(
                    ${Math.random() * 200 - 100}px,
                    ${Math.random() * 100 - 50}px
                )`;

      heartsContainer.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 4000);
    }, i * 80);
  }
}

// =========================================
// HEART RAIN
// =========================================

function startHeartRain() {
  setInterval(() => {
    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = `${Math.random() * 100}%`;

    heart.style.top = `${90 + Math.random() * 10}%`;

    heart.style.opacity = ".4";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }, 1800);
}

// =========================================
// YES BUTTON
// =========================================

yesButton.addEventListener("click", acceptLove);

alsoYesButton.addEventListener("click", acceptLove);

function acceptLove() {
  createHeartExplosion();

  createMassiveHeartExplosion();

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });

  setTimeout(() => {
    finalSection.classList.remove("hidden");

    finalSection.scrollIntoView({
      behavior: "smooth",
    });
  }, 700);
}

// =========================================
// MASSIVE HEART EFFECT
// =========================================

function createMassiveHeartExplosion() {
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");

      heart.className = "floating-heart";

      heart.textContent = "❤️";

      heart.style.left = `${Math.random() * 100}%`;

      heart.style.top = `${50 + Math.random() * 20}%`;

      heart.style.fontSize = `${15 + Math.random() * 25}px`;

      heart.style.animationDuration = `${3 + Math.random() * 3}s`;

      heartsContainer.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 6000);
    }, i * 50);
  }
}
