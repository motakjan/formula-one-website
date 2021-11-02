export const getCurrentSeason = async () => {
  const res = await fetch("http://ergast.com/api/f1/current.json");
  const data = await res.json();
  return data;
};

export const getRoundResults = async (round) => {
  const res = await fetch(
    `http://ergast.com/api/f1/2021/${round}/results.json`
  );
  console.log(`http://ergast.com/api/f1/current/${round}/results.json`);
  const data = await res.json();
  return data;
};
