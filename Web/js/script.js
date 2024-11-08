function openSearch() {
    const searchForm = document.getElementById("search-form");
    searchForm.style.display = "flex";
    document.addEventListener("click", closeOnClickOutside);
    document.addEventListener("keydown", closeOnEscape);
}

function closeSearch() {
    const searchForm = document.getElementById("search-form");
    searchForm.style.display = "none";
    document.removeEventListener("click", closeOnClickOutside);
    document.removeEventListener("keydown", closeOnEscape);
}

function closeOnClickOutside(event) {
    const formContainer = document.querySelector(".form-container");
    if (!formContainer.contains(event.target) && !event.target.classList.contains("search-icon")) {
        closeSearch();
    }
}

function closeOnEscape(event) {
    if (event.key === "Escape") {
        closeSearch();
    }
}

function updateCounter() {
    const input = document.getElementById("search-input");
    const counter = document.getElementById("char-counter");
    counter.textContent = `${input.value.length}/100`;
}
