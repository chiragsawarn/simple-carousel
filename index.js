const data = [
  {
    id: 1,
    heading: "Experimentation",
    subheading:
      "Unlocking Curiosity, Igniting Discovery: Embark on a Journey of Experiments in Our School!",
    src: "./assets/experimentation.jpeg",
  },
  {
    id: 2,
    heading: "Football Coaching",
    subheading:
      "Unleash Your Passion, Unleash Your Potential: Elevate Your Game with Professional Football Coaching!",
    src: "./assets/sports-soccer.jpeg",
  },
  {
    id: 3,
    heading: "Basketball Championships",
    subheading:
      "Dribble, Shoot, Soar: Aim for Greatness and Claim Victory in the Ultimate Basketball Championships!",
    src: "./assets/sports-basketball.jpeg",
  },
  {
    id: 4,
    heading: "Learn Singing",
    subheading:
      "Unleash Your Voice, Unleash Your Soul: Discover the Magic of Singing and Harmonize Your Way to Musical Mastery!",
    src: "./assets/singing.jpg",
  },
  {
    id: 5,
    heading: "Training",
    subheading:
      "Build Strength, Discipline, and Confidence: Master the Art of Karate with Expert Training!",
    src: "./assets/training-karate.jpeg",
  },
];

const swiperWrapper = document.querySelector(".swiper-wrapper");

// Loop through the data and create the HTML components
data.forEach((item) => {
  // Create the main elements
  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add("swiper-slide");

  const card = document.createElement("div");
  card.classList.add("card");

  const cardImage = document.createElement("div");
  cardImage.classList.add("card__image");

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = "";

  const cardBody = document.createElement("div");
  cardBody.classList.add("card__body");

  const cardBodyContent = document.createElement("div");
  cardBodyContent.classList.add("card__body__content");

  const heading = document.createElement("h4");
  heading.classList.add("card__heading");
  heading.textContent = item.heading;

  const subheading = document.createElement("p");
  subheading.classList.add("card__subheading");
  subheading.textContent = item.subheading;

  // Append the elements to create the structure
  cardImage.appendChild(img);

  cardBodyContent.appendChild(heading);
  cardBodyContent.appendChild(subheading);

  cardBody.appendChild(cardBodyContent);

  card.appendChild(cardImage);
  card.appendChild(cardBody);

  swiperSlide.appendChild(card);

  swiperWrapper.appendChild(swiperSlide);
});

// document
//   .querySelector(".swiper-slide-prev")
//   .classList.add("swiper-slide-visible");
// document
//   .querySelector(".swiper-slide-next")
//   .classList.add("swiper-slide-visible");

const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,
  direction: "horizontal",
  loop: true,
  watchSlidesProgress: true,
  breakpoints: {
    768: {
      slidesPerView: 1.5,
      spaceBetween: 30,
      centeredSlides: true,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
