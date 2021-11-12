export const getCurrentSeason = async (year) => {
  const response = await fetch(`https://ergast.com/api/f1/${year}.json`);
  const data = await response.json();
  return data;
};

export const getRoundResults = async (round, year) => {
  const response = await fetch(
    `https://ergast.com/api/f1/${year}/${round}/results.json`
  );
  const data = await response.json();
  return data;
};

export const getNews = async () => {
  const response = await fetch(
    "https://bing-news-search1.p.rapidapi.com/news/search?q=formula%20one&count=15&mkt=en-US&freshness=Week&originalImg=true&textFormat=Raw&safeSearch=Strict",
    {
      method: "GET",
      headers: {
        "x-bingapis-sdk": "true",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": "de006b7b5amshbf6202bda548e38p19cee3jsn56c20bda620f",
      },
    }
  );
  const data = await response.json();
  return data;
};

export const getCurrentTeams = async (year) => {
  const response = await fetch(
    `https://ergast.com/api/f1/${year}/constructorStandings.json`
  );
  const data = await response.json();
  return data;
};

export const getQualifierResults = async (round, year) => {
  const response = await fetch(
    `https://ergast.com/api/f1/${year}/${round}/qualifying.json`
  );
  const data = await response.json();
  return data;
};

export const getDriverStandings = async (year) => {
  const response = await fetch(
    `https://ergast.com/api/f1/${year}/driverStandings.json`
  );
  const data = await response.json();
  return data;
};
