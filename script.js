document.addEventListener("DOMContentLoaded", function () {
  let champions = [];

  // Fetch the champions from the API
  const getChampions = async () => {
    const result = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json"
    );
    const champs = await result.json();
    champions = Object.keys(champs.data).map((x) => x.toLowerCase());
  };

  // Call getChampions to load the champion data
  getChampions();

  // Function to search build
  const searchBuild = () => {
    const myChamp = document.getElementById("my-champ").value.toLowerCase();
    const enemyChamp = document.getElementById("enemy-champ").value.toLowerCase();

    if (champions.includes(myChamp) && champions.includes(enemyChamp)) {
      window.open(
        `https://lolalytics.com/lol/${myChamp}/vs/${enemyChamp}/build/?tier=diamond`,
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      alert("Missing or invalid champion");
    }
  };

  // Function to search counters
  const searchCounters = () => {
    const myChamp = document.getElementById("my-champ").value.toLowerCase();

    if (champions.includes(myChamp)) {
      window.open(
        `https://lolalytics.com/lol/${myChamp}/counters/?tier=diamond`,
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      alert("Missing or invalid champion");
    }
  };

  // Add event listeners to buttons
  document.getElementById("search-build-btn").addEventListener("click", searchBuild);
  document.getElementById("search-counters-btn").addEventListener("click", searchCounters);
});
