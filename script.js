const toggleButton = document.getElementById("theme-toggle");
const downloadButton = document.getElementById("download-pdf");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleButton.textContent = "☀️ Light Mode";
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleButton.textContent = "☀️ Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    toggleButton.textContent = "🌙 Dark Mode";
  }
});

gsap.to("h2, p, .project", { opacity: 1, y: 0, duration: 1, stagger: 0.2 });

downloadButton.addEventListener("click", () => {
  const element = document.querySelector(".container");

  const options = {
    margin: 10,
    filename: "Sai_kiran_Portfolio.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  setTimeout(() => {
    html2pdf().set(options).from(element).save();
  }, 500);
});
