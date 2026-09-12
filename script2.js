document.addEventListener("DOMContentLoaded", () => {
    // Modal Elements
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.getElementById("closeModal");
    const demoModal = document.getElementById("demoModal");
    const demoForm = document.getElementById("demoForm");

    // Open Modal
    if (openModalBtn && demoModal) {
        openModalBtn.addEventListener("click", () => {
            demoModal.style.display = "flex";
        });
    }

    // Close Modal via 'X' Button
    if (closeModalBtn && demoModal) {
        closeModalBtn.addEventListener("click", () => {
            demoModal.style.display = "none";
        });
    }

    // Close Modal when clicking outside content area
    if (demoModal) {
        window.addEventListener("click", (event) => {
            if (event.target === demoModal) {
                demoModal.style.display = "none";
            }
        });
    }

    // Form Submission Handling (Optional placeholder)
    if (demoForm) {
        demoForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you! Your demo request has been submitted successfully.");
            demoModal.style.display = "none";
            demoForm.reset();
        });
    }

    // Dropdown 
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownLi = document.querySelector(".dropdown");

    if (dropdownToggle && dropdownLi) {
        dropdownToggle.addEventListener("click", (e) => {
            if (dropdownToggle.getAttribute("href") === "#") {
                e.preventDefault();
            }
            dropdownLi.classList.toggle("active");
        });

        window.addEventListener("click", (e) => {
            if (!dropdownLi.contains(e.target)) {
                dropdownLi.classList.remove("active");
            }
        });
    }
});