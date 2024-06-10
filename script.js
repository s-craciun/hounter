const scrollContainer = document.querySelector(".carousel-container");

scrollContainer.addEventListener("wheel", function (e) {
  e.preventDefault();

  if (e.deltaX == 0) {
    if (e.deltaY > 0) {
      scrollContainer.scrollLeft += 50;
    } else {
      scrollContainer.scrollLeft -= 50;
    }
  }
});

const features = document.querySelector("#features");
const btnLeft = document.querySelector("#arrow-left");
const btnRight = document.querySelector("#arrow-right");

btnRight.addEventListener("click", function (e) {
  //   e.preventDefault();

  features.addEventListener("scroll", function (e) {
    features.scrollTo({
      right: (features.scrollRight += 20),
    });
  });
});
