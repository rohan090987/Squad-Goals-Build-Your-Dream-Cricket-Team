const players = [
  {
    name: "Virat Kohli",
    image: "images/virat_kohli.jpg",
    stats: {
      "Strike Rate": "138.56",
      "Matches Played": "250",
      "Jersey Number": "18",
      "Best Performance": "183 vs PAK"
    }
  },
  {
    name: "Rohit Sharma",
    image: "images/rohit_sharma.jpg",
    stats: {
      "Strike Rate": "132.21",
      "Matches Played": "220",
      "Jersey Number": "45",
      "Best Performance": "264 vs SL"
    }
  },
  {
    name: "MS Dhoni",
    image: "images/ms_dhoni.jpg",
    stats: {
      "Strike Rate": "126.13",
      "Matches Played": "350",
      "Jersey Number": "7",
      "Best Performance": "183* vs SL"
    }
  },
  {
    name: "Jasprit Bumrah",
    image: "images/jasprit_bumrah.jpg",
    stats: {
      "Strike Rate": "NA",
      "Matches Played": "100",
      "Jersey Number": "93",
      "Best Performance": "5/27 vs SL"
    }
  },
  {
    name: "KL Rahul",
    image: "images/kl_rahul.jpg",
    stats: {
      "Strike Rate": "142.45",
      "Matches Played": "110",
      "Jersey Number": "1",
      "Best Performance": "112 vs WI"
    }
  },
  {
    name: "Hardik Pandya",
    image: "images/hardik_pandya.jpg",
    stats: {
      "Strike Rate": "144.33",
      "Matches Played": "130",
      "Jersey Number": "33",
      "Best Performance": "91 vs AUS"
    }
  },
  {
    name: "Suryakumar Yadav",
    image: "images/suryakumar_yadav.jpg",
    stats: {
      "Strike Rate": "174.23",
      "Matches Played": "80",
      "Jersey Number": "63",
      "Best Performance": "117 vs ENG"
    }
  },
  {
    name: "Ravindra Jadeja",
    image: "images/ravindra_jadeja.jpg",
    stats: {
      "Strike Rate": "130.11",
      "Matches Played": "190",
      "Jersey Number": "8",
      "Best Performance": "66* & 3/44 vs NZ"
    }
  },
  {
    name: "Shubman Gill",
    image: "images/shubman_gill.jpg",
    stats: {
      "Strike Rate": "134.90",
      "Matches Played": "60",
      "Jersey Number": "77",
      "Best Performance": "208 vs NZ"
    }
  },
  {
    name: "Kuldeep Yadav",
    image: "images/kuldeep_yadav.jpg",
    stats: {
      "Strike Rate": "NA",
      "Matches Played": "80",
      "Jersey Number": "23",
      "Best Performance": "6/25 vs ENG"
    }
  },
  {
    name: "Mohammed Siraj",
    image: "images/mohammed_siraj.jpg",
    stats: {
      "Strike Rate": "NA",
      "Matches Played": "50",
      "Jersey Number": "13",
      "Best Performance": "6/21 vs SL"
    }
  }
];

const grid = document.querySelector(".player-grid");
const modal = document.getElementById("playerModal");
const modalName = document.getElementById("modalName");
const modalStats = document.getElementById("modalStats");
const closeBtn = document.querySelector(".close-btn");

players.forEach((player) => {
  const card = document.createElement("div");
  card.className = "player-card";
  card.innerHTML = `
    <img src="${player.image}" alt="${player.name}">
    <h3>${player.name}</h3>
  `;
  card.addEventListener("click", () => {
    modal.style.display = "flex";
    modalName.textContent = player.name;
    modalStats.innerHTML = "";
    for (let key in player.stats) {
      const li = document.createElement("li");
      li.textContent = `${key}: ${player.stats[key]}`;
      modalStats.appendChild(li);
    }
  });
  grid.appendChild(card);
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
