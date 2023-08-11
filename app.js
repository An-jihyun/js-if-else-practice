function screenResize() {
  const screen = window.innerWidth;

  document.body.classList.remove("l_yellow");

  document.body.classList.remove("m_purple");

  document.body.classList.remove("s_blue");

  if (screen > 1000) {
    document.body.classList.add("l_yellow");
  } else if (screen > 700) {
    document.body.classList.add("m_purple");
  } else {
    document.body.classList.add("s_blue");
  }
}

screenResize();
window.addEventListener("resize", screenResize);
