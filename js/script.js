window.addEventListener("DOMContentLoaded", function () {
  const elements = document.getElementsByClassName("tittle");

  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    const fullText = el.innerHTML;
    let index = 0;
    el.innerHTML = "";

    function typeWriter() {
      if (index < fullText.length) {
        el.innerHTML += fullText.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
      }
    }

    typeWriter();
  }
})

window.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contact form");
  const inputs = form.querySelectorAll("input");
  const button = form.querySelector("button");

  button.addEventListener("click", function (e) {
    e.preventDefault();

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        input.style.border = "2px solid red";
      } else {
        input.style.border = "2px solid green";
      }
    });

    const nameInput = Array.from(inputs).find((inp) =>
      inp.placeholder.toLowerCase().includes("name")
    );

    if (nameInput && nameInput.value.trim()) {
      alert("Thanks, We will contact you soon Mr: " + nameInput.value.trim() + "🤗🤩");
    }
  });
});

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {
  const reveals = document.querySelectorAll(".scroll-reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("revealed");
    } else {
      el.classList.remove("revealed");
    }
  });
}
revealOnScroll();
