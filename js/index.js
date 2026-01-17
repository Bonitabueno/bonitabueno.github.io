const wrap = document.getElementById("typewrap");
const text = document.getElementById("typetext");
const cursor = document.getElementById("cursor");

wrap.addEventListener("animationend", () => {
  const textRect = text.getBoundingClientRect();
  const wrapRect = wrap.getBoundingClientRect();

  const left = textRect.right - wrapRect.left;

  cursor.style.left = `${left}px`;
});
