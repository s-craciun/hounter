const setActiveItem = (elementList, className) => {
  elementList.forEach((item, index) => {
    item.addEventListener("click", function () {
      item.classList.toggle(className);

      elementList.forEach(function (i, key) {
        if (index !== key) {
          i.classList.remove(className);
        }
      });
    });
  });
};

// Navigation

const navItems = document.querySelectorAll(".navigation-item");

setActiveItem(navItems, "navigation-item-active");

// Featured

const filterItems = document.querySelectorAll(".btn-filter");

setActiveItem(filterItems, "btn-outline-active");

// Presentation

const scrollContainer = document.querySelector("#carousel-container");

scrollContainer.addEventListener("wheel", function (e) {
  e.preventDefault();

  if (e.deltaX == 0) {
    if (e.deltaY > 0) {
      scrollContainer.scrollTo({
        left: (scrollContainer.scrollLeft += 50),
        behavior: "smooth",
      });
    } else {
      scrollContainer.scrollTo({
        left: (scrollContainer.scrollLeft -= 50),
        behavior: "smooth",
      });
    }
  }
});

// Featured

function sideScroll(element, direction, speed, distance, step) {
  let scrollAmount = 0;
  const slideTimer = setInterval(function () {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}

const features = document.querySelector("#features");
const btnLeft = document.querySelector("#arrow-left");
const btnRight = document.querySelector("#arrow-right");

btnRight.addEventListener("click", function (e) {
  e.preventDefault();

  sideScroll(features, "right", 10, 360, 10);
});

btnLeft.addEventListener("click", function (e) {
  e.preventDefault();

  sideScroll(features, "left", 10, 360, 10);
});

// Tour

const video = document.querySelector("#video");
const btnPlay = document.querySelector("#btn-play");
let isPlaying = false;

btnPlay.addEventListener("click", function (e) {
  e.preventDefault();

  video.play();

  isPlaying = true;
  btnPlay.style.display = "none";
});

video.addEventListener("click", function (e) {
  e.preventDefault();

  if (isPlaying) {
    video.pause();

    isPlaying = false;
    btnPlay.style.display = "block";
  }
});

// Reviews

const reviewsContainer = document.querySelector("#reviews-container");
const reviews = document.querySelectorAll(".review-wrapper");
const switchBtns = document.querySelector(".switch-btns");

const scrollInto = (elem) => {
  elem.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
};

const createBtns = () => {
  Array.from(new Array(reviewsContainer.childElementCount)).forEach(
    (newBtn, index) => {
      const btn = switchBtns.appendChild(document.createElement("button"));
      btn.classList.add("switch-btn");
      btn.ariaLabel = `Choose ${index + 1}`;
    }
  );
};

window.addEventListener("load", () => {
  createBtns();

  // scrollInto(reviews[1]);
  reviews[1].scrollIntoView({
    behavior: "instant",
    inline: "center",
  });

  window.scroll({ left: window.pageXOffset, top: 0, behavior: "instant" });

  reviews.forEach((review) => {
    review.addEventListener("click", (_e) => {
      scrollInto(review);
    });
  });

  document.querySelectorAll(".switch-btn").forEach((btn, index) => {
    btn.addEventListener("click", (_e) => {
      scrollInto(reviews[index]);
    });
  });
});

// Articles

const articles = [
  {
    img: "./img/article-1.jpeg",
    userpic: "./img/user-1.jpeg",
    username: "Dianne Russell",
    title: "The things we need to check when we want to buy a house",
    content:
      "Nihil iure inventore a facere cupiditate architecto ullam, perspiciatis consectetur impedit, nemo accusantium iste quisquam molestiae quasi.",
    details: "6 min read | 25 Apr 2021",
  },
  {
    img: "./img/article-2.jpeg",
    userpic: "./img/user-2.jpeg",
    username: "Dianne Russell",
    title: "The things we need to check when we want to buy a house",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure debitis architecto ab quos nihil eos dolore possimus ratione dolores suscipit!",
    details: "4 min read | 11 Apr 2021",
  },
  {
    img: "./img/article-3.jpeg",
    userpic: "./img/user-3.jpeg",
    username: "Dianne Russell",
    title: "The things we need to check when we want to buy a house",
    content:
      "Donec semper, quam et pretium ultricies, velit velit porttitor eros, ut euismod dui tortor sed lectus. Vivamus ut nulla eget.",
    details: "8 min read | 30 Apr 2021",
  },
  {
    img: "./img/article-1.jpeg",
    userpic: "./img/user-4.jpeg",
    username: "Dianne Russell",
    title: "The things we need to check when we want to buy a house",
    content:
      "Integer eu vestibulum tortor, suscipit pharetra neque. Nulla facilisi. Morbi volutpat tincidunt velit, ut cursus urna sagittis ac. Sed sodales.",
    details: "4 min read | 12 Apr 2021",
  },
  {
    img: "./img/article-2.jpeg",
    userpic: "./img/user-5.jpeg",
    username: "Dianne Russell",
    title: "The things we need to check when we want to buy a house",
    content:
      "Vestibulum eget nulla ut mauris aliquet rutrum. Pellentesque sed dignissim magna. In malesuada varius lacus. Fusce vestibulum dolor est, eu.",
    details: "5 min read | 16 Apr 2021",
  },
  {
    img: "./img/article-3.jpeg",
    userpic: "./img/user-1.jpeg",
    username: "Dianne Russell",
    title: "The things we need to check when we want to buy a house",
    content:
      "Vestibulum rutrum mi non lorem hendrerit, vulputate rhoncus ex tristique. Integer ac ex congue mi lobortis efficitur. Quisque a lectus.",
    details: "1 min read | 25 Apr 2021",
  },
  {
    img: "./img/article-2.jpeg",
    userpic: "./img/user-5.jpeg",
    username: "Dianne Russell",
    title: "The things we need to check when we want to buy a house",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit, dolor sed lobortis mattis, felis justo tincidunt ipsum, et facilisis.",
    details: "2 min read | 22 Apr 2021",
  },
];

const articlesList = document.querySelector(".articles-list");
const activeArticle = document.querySelector(".active-article");
const btnMore = document.querySelector("#btn-more");

const setArticleActive = (index) => {
  const article = articles[index];

  const activeArtic = `
    <img
      src=${article.img}
      alt="House"
      class="active-article-img mb-x-sm"
    />
    <div class="article-author mb-x-sm">
      <img
        src=${article.userpic}
        alt="Author"
        class="active-author-img"
      />
      <span class="label-text" class="active-author-name"
        >${article.username}</span
      >
    </div>
    <h3 class="heading-3 mb-x-sm">
      ${article.title}
    </h3>
    <p class="mb-x-sm">
      ${article.content}
    </p>
    <div class="article-details">
      <div class="clock-icon">&nbsp;</div>
      <span class="label-text">${article.details}</span>
    </div>
  `;

  activeArticle.innerHTML = activeArtic;
};
setArticleActive(0);

let articleItems;

const displayArticles = (index = 0) => {
  const articlePortion = articles.slice(index, index + 3);

  articlePortion.forEach((article, index) => {
    const artic = `
        <div class="article">
          <img
            src=${article.img}
            alt="Article ${index + 1}"
            class="article-preview"
          />
          <div class="article-info">
            <div class="article-author mb-x-sm">
              <img src=${article.userpic} alt="Author ${index + 1}" />
              <span class="label-text">${article.username}</span>
            </div>
            <p class="subtitle article-title mb-x-sm">
               ${article.title}
            </p>
            <div class="article-details">
              <div class="clock-icon">&nbsp;</div>
              <span class="label-text">${article.details}</span>
            </div>
          </div>
        </div>
      `;

    articlesList.insertAdjacentHTML("beforeend", artic);
  });

  articleItems = document.querySelectorAll(".article");

  articleItems.forEach((article, index) => {
    article.addEventListener("click", function (e) {
      setArticleActive(index);
    });
  });
};
displayArticles();

let index = 3;

btnMore.addEventListener("click", function (e) {
  displayArticles(index);
  index += 3;
});

// Cookies message

const cookiesMessage = document.querySelector(".cookies");
const btnClose = document.querySelector(".btn-close");

btnClose.addEventListener("click", function (e) {
  cookiesMessage.style.display = "none";
});

// Animation

const getItems = (selector) => {
  const items = document.querySelectorAll(selector);

  return items;
};

const observeElement = (element, animation) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animation);
          entry.target.style.opacity = 1;

          return;
        }
      });
    },
    { threshold: 1 }
  );

  element.forEach((el) => {
    observer.observe(el);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  observeElement(getItems("h1"), "animated-right");
  observeElement(getItems(".tip-left"), "animated-right");
  observeElement(getItems(".tip-center"), "animated-top");
  observeElement(getItems(".grow"), "animated-grow");

  observeElement(getItems(".to-top"), "animated-top");
  observeElement(getItems(".to-right"), "animated-right");
  observeElement(getItems(".to-left"), "animated-left");
  observeElement(getItems(".to-bottom"), "animated-bottom");
});
