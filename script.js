const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Section reveal on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
        }
    });
});

sections.forEach(sec => {
    sec.classList.add("section-hidden");
    observer.observe(sec);
});


// ===== Contact Form Validation =====
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "" || email === "" || message === "") {
        showMessage("Please fill in all fields.", "error");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        showMessage("Please enter a valid email address.", "error");
        return;
    }

    if (message.length < 10) {
        showMessage("Message must be at least 10 characters long.", "error");
        return;
    }

    showMessage("Message sent successfully!", "success");
    form.reset();
});

function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = type;
}
