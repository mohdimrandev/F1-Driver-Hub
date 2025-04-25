const f1Drivers = [
  {
    id: 1,
    name: "Lewis Hamilton",
    team: "Ferrari",
    championships: "7 World championships",
    img: "./images/item-1.jpeg",
    desc: "Lewis Hamilton is ferrari F1 driver and 7-time world champion.",
  },
  {
    id: 2,
    name: "Charles Leclerc",
    team: "Ferrari",
    championships: "None",
    img: "./images/item-2.jpeg",
    desc: "Charles is a ferrari f1 driver.",
  },
  {
    id: 3,
    name: "Lando Norris",
    team: "McLaren",
    championships: "None",
    img: "./images/item-3.jpeg",
    desc: "Lando is a McLaren f1 driver.",
  },
  {
    id: 4,
    name: "Oscar Piastri",
    team: "McLaren",
    championships: "None",
    img: "./images/item-4.jpeg",
    desc: "Oscar is a McLaren f1 driver.",
  },
  {
    id: 5,
    name: "George Russell",
    team: "Mercedes",
    championships: "None",
    img: "./images/item-5.jpeg",
    desc: "George is a Mercedes f1 driver.",
  },
  {
    id: 6,
    name: "Kimi Antonelli",
    team: "Mercedes",
    championships: "None",
    img: "./images/item-6.jpeg",
    desc: "Kimi is a Mercedes f1 driver.",
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", () => {
  displayDrivers(f1Drivers);
  createTeamFilters();
});

function displayDrivers(drivers) {
  const driversHTML = drivers
    .map(
      (driver) => `
    <article class="driver-card">
      <img src="${driver.img}" alt="${driver.name}" class="driver-photo">
      <div class="driver-info">
        <div class="name-championship">
          <h3>${driver.name}</h3>
          <p class="championships">${driver.championships}</p>
        </div>
        <p class="team">${driver.team}</p>
        <p class="bio">${driver.desc}</p>
      </div>
    </article>
  `
    )
    .join("");

  sectionCenter.innerHTML = driversHTML;
}

function createTeamFilters() {
  const teams = [...new Set(f1Drivers.map((driver) => driver.team))];
  teams.unshift("All");

  const buttonsHTML = teams
    .map(
      (team) => `
    <button class="filter-btn" data-team="${team}">${team}</button>
  `
    )
    .join("");

  btnContainer.innerHTML = buttonsHTML;

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const team = btn.dataset.team;
      const filteredDrivers =
        team === "All"
          ? f1Drivers
          : f1Drivers.filter((driver) => driver.team === team);
      displayDrivers(filteredDrivers);
    });
  });
}
