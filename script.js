document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const completionMessage = document.getElementById("completion-message");

  // Hide completion message initially
  completionMessage.style.display = "none";

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent reload
    form.style.display = "none"; // hide the form
    completionMessage.style.display = "flex"; // show completion message
  });

  // Go back button logic
  window.goBack = function () {
    completionMessage.style.display = "none";
    form.style.display = "block";
    form.reset(); // optional: clears previous entries
  };
});
