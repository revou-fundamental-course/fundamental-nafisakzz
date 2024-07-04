// ini javascript
// ini javascript

// WElcoming speech
let name = prompt("Tolong masukkan nama anda", "");
document.getElementById("input-nama").innerHTML = name;
// welcoming speech end

// slider

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "flex";
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
  setInterval(nextSlide, 3000); // Ganti slide setiap 3 detik
});

// slider end

// About Us
document.getElementById("linkedin-logo").addEventListener("click", function () {
  window.location.href = "https://www.linkedin.com/in/nafisakamila1407/";
});

document
  .getElementById("instagram-logo")
  .addEventListener("click", function () {
    window.location.href = "https://www.instagram.com/nafisakml_";
  });

// About Us End

// validate form
function submitForm() {
  const nama = document.getElementById("nama").value;
  const tanggalLahir = document.getElementById("tanggal-lahir").value;
  const jenisKelaminRadio = document.querySelector(
    'input[name="jenis-kelamin"]:checked'
  );
  const pesan = document.getElementById("pesan").value;

  if (!nama || !tanggalLahir || !jenisKelaminRadio || !pesan) {
    alert("Semua field harus diisi.");
    return;
  }

  const jenisKelamin = jenisKelaminRadio.value;
  const currentTime = new Date().toString();

  document.getElementById(
    "current-time"
  ).innerText = `Current time : ${currentTime}`;
  document.getElementById("output-nama").innerText = `Nama : ${nama}`;
  document.getElementById(
    "output-tanggal-lahir"
  ).innerText = `Tanggal Lahir : ${tanggalLahir}`;
  document.getElementById(
    "output-jenis-kelamin"
  ).innerText = `Jenis Kelamin : ${jenisKelamin}`;
  document.getElementById("output-pesan").innerText = `Pesan : ${pesan}`;

  document.getElementById("message-form").reset();
}
// validate form end
