document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactbutton");

  contactForm.addEventListener("click", (e) => {
    document.querySelector(".modal").style.display = "flex";
    console.log(e);
  });

  const test = document
    .querySelector(".modal")
    .addEventListener("click", (e) => {
      if (e.target === document.querySelector(".container-contact")) {
        document.querySelector(".modal").style.display = "none";
      }
    });
});
