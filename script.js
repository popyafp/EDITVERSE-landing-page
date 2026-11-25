
const WA_NUMBER = "6285859068437";
const INSTAGRAM_URL = "https://www.instagram.com/editverse_id/";


document.addEventListener("DOMContentLoaded", () => {

  // ---------- Menu HP ----------
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", open);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", false);
      });
    });
  }

  // ---------- Tab price list ----------
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".tab-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.getElementById("tab-" + tab.dataset.tab);
      if (!target) return;

      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));

      tab.classList.add("active");
      target.classList.add("active");
    });
  });

  // ---------- WhatsApp & Instagram ----------
  const waLink = (text) =>
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

  const waButton = document.getElementById("waButton");
  const igButton = document.getElementById("igButton");

  if (waButton) waButton.href = waLink("Hi EDITVERSE! Aku mau tanya tentang layanan kalian.");
  if (igButton) igButton.href = INSTAGRAM_URL;

  // Tombol "Pilih paket" kirim nama paket ke WhatsApp
  document.querySelectorAll(".price-link").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const pkg = btn.dataset.package || "layanan EDITVERSE";
      window.open(waLink(`Hi EDITVERSE! Aku tertarik dengan paket: ${pkg}.`), "_blank", "noopener");
    });
  });

  // ---------- Tahun footer ----------
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});