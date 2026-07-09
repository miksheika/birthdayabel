function openGift() {
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "block";
  startHeart();
}

function startHeart() {
  setInterval(() => {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 18) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);

  }, 250);
}
