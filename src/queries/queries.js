export const getCurrentSeason = async () => {
  console.log("fetching season data");
  const res = await fetch("http://ergast.com/api/f1/current.json");
  const data = await res.json();
  return data;
};

export const getRoundResults = async (round) => {
  console.log("fetching round results");
  const res = await fetch(
    `http://ergast.com/api/f1/2021/${round}/results.json`
  );
  const data = await res.json();
  return data;
};
