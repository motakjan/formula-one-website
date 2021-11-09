export const getCurrentSeason = async () => {
  const response = await fetch("http://ergast.com/api/f1/2021.json");
  const data = await response.json();
  return data;
};

export const getRoundResults = async (round) => {
  const response = await fetch(
    `http://ergast.com/api/f1/2021/${round}/results.json`
  );
  const data = await response.json();
  return data;
};

export const getNews = async () => {
  const response = await fetch(
    "https://newsapi.org/v2/everything?domains=formula1.com&sortBy=popularity&apiKey=28cea466b3f5460fac29dc04ce75301d"
  );
  const data = await response.json();
  return data;
};

export const getCurrentTeams = async () => {
  const response = await fetch(
    `http://ergast.com/api/f1/2021/constructorStandings.json`
  );
  const data = await response.json();
  return data;
};

export const getQualifierResults = async (round) => {
  const response = await fetch(
    `http://ergast.com/api/f1/2021/${round}/qualifying.json`
  );
  const data = await response.json();
  return data;
};
