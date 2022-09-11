let count = 0;

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const counter = document.getElementById("counter");
const star = document.querySelector(".star");

const starChange = () => {
  star.innerHTML = "";
  for (let i = 1; i <= count; i++) {
    const newStarDiv = document.createElement("div");
    const newStar = document.createElement("img");
    newStar.classList.add("star");
    newStar.src =
      "https://ih1.redbubble.net/image.1195355547.7815/st,small,507x507-pad,600x600,f8f8f8.jpg";
    newStarDiv.appendChild(newStar);
    star.append(newStarDiv);
  }
};

const numberChange = () => {
  counter.textContent = count;
  starChange();
};
numberChange();

subtract.addEventListener("click", () => {
  if (count > 0) {
    count -= 1;
    numberChange();
  }
});

add.addEventListener("click", () => {
  if (count <= 4) {
    count += 1;
    numberChange();
  }
});
