const allPlayers = () => {
  const searchValue = document.getElementById('search-box').value;
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
};
