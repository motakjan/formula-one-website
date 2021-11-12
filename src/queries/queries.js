export const getCurrentSeason = async (year) => {
  const response = await fetch(`http://ergast.com/api/f1/${year}.json`);
  const data = await response.json();
  return data;
};

export const getRoundResults = async (round, year) => {
  const response = await fetch(
    `http://ergast.com/api/f1/${year}/${round}/results.json`
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

export const getCurrentTeams = async (year) => {
  const response = await fetch(
    `http://ergast.com/api/f1/${year}/constructorStandings.json`
  );
  const data = await response.json();
  return data;
};

export const getQualifierResults = async (round, year) => {
  const response = await fetch(
    `http://ergast.com/api/f1/${year}/${round}/qualifying.json`
  );
  const data = await response.json();
  return data;
};

export const getDriverStandings = async (year) => {
  console.log(`http://ergast.com/api/f1/2018/driverStandings.json`);
  const response = await fetch(
    `http://ergast.com/api/f1/${year}/driverStandings.json`
  );
  const data = await response.json();
  return data;
};
