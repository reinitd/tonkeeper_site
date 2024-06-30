const cards = document.querySelectorAll(".card");
const tiltFactor = 7;
const reverseTilt = false;

if (window.innerWidth > 700) {
  cards.forEach((item) => {
    item.addEventListener("mousemove", (e) => {
      const { left, top, width, height } = item.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      let angleX = -((e.clientY - centerY) / (height / 2)) * tiltFactor;
      let angleY = ((e.clientX - centerX) / (width / 2)) * tiltFactor;
      if (reverseTilt) {
        angleX = -angleX;
        angleY = -angleY;
      }
      item.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
  
    item.addEventListener("mouseleave", () => {
      item.style.transform = "none";
    });
  });
}

// mobile navigation

document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.getElementById("checkbox");
  var options = document.getElementsByClassName("nav-options")[0];

  function resize() {
    if (window.innerWidth > 800) {
      options.style.display = "flex";
      options.classList.remove("show", "hide");
      checkbox.checked = false;
    } else {
      if (checkbox.checked) {
        options.classList.remove("show", "hide");
        options.style.display = "flex";
      } else {
        options.style.display = "none";
      }
    }
  }

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      options.style.display = "flex";
      options.classList.add("show");
      options.classList.remove("hide");
    } else {
      options.classList.add("hide");
      options.classList.remove("show");
    }
  });

  window.addEventListener("resize", resize);
});
