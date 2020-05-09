const ejercicioAcordion = document.getElementsByClassName("acordion");
let i;

for (i = 0; i < ejercicioAcordion.length; i++) {
  ejercicioAcordion[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}