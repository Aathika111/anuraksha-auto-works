const languageButton = document.getElementById("language-toggle");
const languageLabel = document.getElementById("language-label");
const yearElement = document.getElementById("year");

let currentLanguage = "ta";

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-ta][data-en]").forEach((element) => {
    element.textContent = element.dataset[language];
  });

  if (languageLabel) {
    languageLabel.textContent = language === "ta" ? "English" : "தமிழ்";
  }
}

if (languageButton) {
  languageButton.addEventListener("click", () => {
    const nextLanguage = currentLanguage === "ta" ? "en" : "ta";
    setLanguage(nextLanguage);
  });
}