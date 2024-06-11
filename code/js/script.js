// Qualifications page start
var images = [
  { src: "images/3.jpg", alt: "HTML Course" },
  { src: "images/4.jpg", alt: "CSS Course" },
  { src: "images/5.jpg", alt: "JS Course" },
];

var currentIndex = 0;
var galleryImage = document.getElementById("galleryImage");
var galleryDesc = document.querySelector(".desc");

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function updateImage() {
  galleryImage.src = images[currentIndex].src;
  galleryDesc.textContent = images[currentIndex].alt;
}

// FAQ Page start

document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question");
  const answers = document.querySelectorAll(".answer");

  questions.forEach(function (question, index) {
    question.addEventListener("click", function () {
      // Toggle the display of the answer
      const answer = answers[index];
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        // Hide all answers except the one clicked
        answers.forEach(function (ans) {
          if (ans !== answer) {
            ans.style.display = "none";
          }
        });
        answer.style.display = "block";
      }
    });
  });
});
