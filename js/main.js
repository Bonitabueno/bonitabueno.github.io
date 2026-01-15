const layer = document.querySelector(".cursor-layer");

window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  layer.style.setProperty("--x", `${x}%`);
  layer.style.setProperty("--y", `${y}%`);
});
