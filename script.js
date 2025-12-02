document.getElementById("startButton").addEventListener("click", () => {
  window.open("https://www.rocketleague.com", "_blank");
});

document.getElementById("sobreButton").addEventListener("click", () => {
  alert(
    "Rocket League é um jogo que mistura carros e futebol, criado pela Psyonix em 2015.\n\n" +
    "É altamente competitivo, com modos casuais e ranqueados 1v1, 2v2 e 3v3.\n\n" +
    "As mecânicas envolvem saltos, impulsos (boost) e controle aéreo.\n\n" +
    "A Rocket League Championship Series (RLCS) é o campeonato oficial com equipes do mundo todo."
  );
});

document.getElementById("rankingCircle").addEventListener("click", () => {
  window.open("https://rocketleague.tracker.network/rocket-league", "_blank");
});

document.getElementById("mecanicasCircle").addEventListener("click", () => {
  window.open("https://www.youtube.com/results?search_query=rocket+league+mecanicas", "_blank");
});

document.getElementById("tutoriaisCircle").addEventListener("click", () => {
  window.open("https://store.epicgames.com/pt-BR/p/rocket-league", "_blank");
});
