// Function to update the preview window
function updatePreview() {
  // Get all form inputs
  const formElements = document.querySelectorAll("form input, form select");

  // Loop through each form element
  formElements.forEach((element) => {
    const id = element.id; // Get the ID of the form element
    const previewElements = document.querySelectorAll(`[id^="${id}_p"]`); // Find all corresponding preview elements

    // If corresponding preview elements exist, update their content
    if (previewElements.length > 0) {
      previewElements.forEach((previewElement) => {
        if (element.type === "radio") {
          // Handle radio buttons
          if (element.checked) {
            previewElement.textContent = element.value;
          }
        } else {
          // Handle other input types
          previewElement.textContent = element.value;
        }
      });
    }
  });

  // Calculate and update rental days
  const startDate = document.getElementById("start_date").value;
  const endDate = document.getElementById("end_date").value;
  const rentalDaysElements = document.querySelectorAll(`[id^="rental_days_p"]`);

  if (startDate && endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    rentalDaysElements &&
      rentalDaysElements.forEach((rentalDaysElement) => {
        rentalDaysElement.textContent = diffDays;
      });
  }
}

// Attach event listeners to all form inputs
document.querySelectorAll("form input, form select").forEach((element) => {
  element.addEventListener("input", updatePreview); // Update preview on input change
  element.addEventListener("change", updatePreview); // Update preview on value change
});

// Initialize the preview on page load
document.addEventListener("DOMContentLoaded", updatePreview);

//set current date current_date_p
document.querySelectorAll(`[id^="current_date_p"]`).forEach((curr_element) => {
  curr_element.innerHTML = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
});

/**
 * Download the receipt as a pdf or jpg
 * @param {Object} event
 */
function downloadReceipt(event) {
  event.preventDefault();
  document.getElementById("form").style.display = "none";
  document
    .getElementsByClassName("print_window")[0]
    .classList.remove("scroll-x");
  window.print();
  setTimeout(() => {
    document.getElementById("form").style.display = "block";
    document
      .getElementsByClassName("print_window")[0]
      .classList.add("scroll-x");
  }, 1000);
}
document
  .getElementById("submit_btn")
  .addEventListener("click", downloadReceipt);
