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

let centerItemIndex = 1;

window.onload = () => populateCard();

const populateCard = () => {
  // Left
  const leftItemIndex =
    centerItemIndex === 0 ? data.length - 1 : centerItemIndex - 1;
  document
    .getElementById("leftImage")
    .setAttribute("src", data[leftItemIndex].src);
  document.getElementById("leftHeading").innerText =
    data[leftItemIndex].heading;
  document.getElementById("leftSubheading").innerText =
    data[leftItemIndex].subheading;

  // Right
  document
    .getElementById("rightImage")
    .setAttribute("src", data[(centerItemIndex + 1) % data.length].src);
  document.getElementById("rightHeading").innerText =
    data[(centerItemIndex + 1) % data.length].heading;
  document.getElementById("rightSubheading").innerText =
    data[(centerItemIndex + 1) % data.length].subheading;

  // Center
  document
    .getElementById("centerImage")
    .setAttribute("src", data[centerItemIndex].src);
  document.getElementById("centerHeading").innerText =
    data[centerItemIndex].heading;
  document.getElementById("centerSubheading").innerText =
    data[centerItemIndex].subheading;
};

const handleLeftClick = () => {
  centerItemIndex = centerItemIndex == 0 ? data.length - 1 : --centerItemIndex;
  populateCard();
};

const handleRightClick = () => {
  centerItemIndex = centerItemIndex == data.length - 1 ? 0 : ++centerItemIndex;
  populateCard();
};
