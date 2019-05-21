(function() {
  document.addEventListener("keypress", e => {
    let el = document.getElementById("keyDisplay");
    console.log(e.keyCode);

    switch (e.keyCode) {
      case 32:
        console.log(e.keyCode);
        el.innerHTML = "Space";
        break;
      default:
        el.innerHTML = e.key;
        break;
    }
  });
})();
