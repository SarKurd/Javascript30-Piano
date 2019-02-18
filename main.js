function main() {
  const keysContainer = document.querySelector(".div--piano_container");

  keysContainer.addEventListener("click", function(event) {
    const cPath = event.composedPath();
    const keyContainer = cPath[cPath.length - 7];
    if (keyContainer) {
      const audio = new Audio(
        `./sounds/${keyContainer.getAttribute("data-sound")}.wav`
      );
      audio.onplaying = function() {
        keyContainer.classList.toggle("playing");
      };
      audio.onended = function() {
        keyContainer.classList.toggle("playing");
      };
      audio.play();
    }
  });
  window.onkeypress = function(event) {
    const keyCode = event.which || event.keyCode;
    const datakeycode = document.querySelectorAll("[data-keycode]");
    for (let i = 0; i < datakeycode.length; ++i) {
      if (Number(datakeycode[i].getAttribute("data-keycode")) === keyCode) {
        const audio = new Audio(
          `./sounds/${datakeycode[i].getAttribute("data-sound")}.wav`
        );
        audio.onplaying = function() {
          datakeycode[i].classList.toggle("playing");
        };
        audio.onended = function() {
          datakeycode[i].classList.toggle("playing");
        };
        audio.play();
      }
    }
  };
}

window.onload = main;
