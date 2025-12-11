document.addEventListener("DOMContentLoaded", function () {
  const scrollElements = document.querySelectorAll(".scroll-fade");
  function elementInView(el, offset = 0) {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) - offset
    );
  }
  function elementOutOfView(el) {
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;
    return elementBottom < 0 || elementTop > window.innerHeight;
  }
  function handleScrollAnimation() {
    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) el.classList.add("show");
      else if (elementOutOfView(el)) el.classList.remove("show");
    });
  }
  window.addEventListener("scroll", handleScrollAnimation);
  window.addEventListener("resize", handleScrollAnimation);
  handleScrollAnimation();
});
