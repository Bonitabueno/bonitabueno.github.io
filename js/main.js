const cursor = document.querySelector(".cursor");
const bg = document.querySelector(".bg-layer");
const cards = document.querySelectorAll(".card");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  bg.style.setProperty("--mx", `${x}%`);
  bg.style.setProperty("--my", `${y}%`);
});

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform =
      `translate(${x * 0.08}px, ${y * 0.08}px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translate(0, 0)";
  });
});
