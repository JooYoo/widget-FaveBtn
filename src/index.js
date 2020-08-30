let heartEl = document.getElementById("heart");
let nameEl = document.getElementById("name");
let isFaveHeart = false;
let isFaveName = false;

heartEl.addEventListener("click", () => {
  isFaveHeart = setFaveBtnClick(heartEl, "heart-click", isFaveHeart);
});

nameEl.addEventListener("click", () => {
  isFaveName = setFaveBtnClick(nameEl, "name-click", isFaveName);
});

function setFaveBtnClick(faveBtnEl, faveBtnClassName, isLike) {
  !isLike
    ? faveBtnEl.classList.add(faveBtnClassName)
    : faveBtnEl.classList.remove(faveBtnClassName);

  isLike = !isLike;

  return isLike;
}
