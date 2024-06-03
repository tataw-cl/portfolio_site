function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

if (window.matchMedia("(max-width: 600px)").matches) {
  const text = document.querySelector(".sec-text");
  const textload = () => {
    setTimeout(() => {
      text.textContent = "a Web Developer";
    }, 0);
    setTimeout(() => {
      text.textContent = "an Application Programmer";
    }, 5100);
    setTimeout(() => {
      text.textContent = "a Systems Programmer";
    }, 10000);
    setTimeout(() => {
      text.textContent = "an Open source enthusiast";
    }, 15000);
  };
  textload();
  setInterval(textload, 20000); //1s =1000ms
} else {
  const text = document.querySelector(".sec-text");
  const textload = () => {
    setTimeout(() => {
      text.textContent = "a Web Developer";
    }, 0);
    setTimeout(() => {
      text.textContent = "an Application Programmer";
    }, 4000);
    setTimeout(() => {
      text.textContent = "a Systems Programmer";
    }, 8000);
    setTimeout(() => {
      text.textContent = "an Open source enthusiast";
    }, 12000);
  };
  textload();
  setInterval(textload, 16000); //1s =1000ms
}
