export const getTeamColors = () => {
  const teamColors = {
    Mercedes: "#00D2BE",
    Ferrari: "#DC0000",
    "Red Bull": "#0600EF",
    "Alpine F1 Team": "#0090FF",
    "Haas F1 Team": "#FFFFFF",
    "Aston Martin": "#006F62",
    AlphaTauri: "#2B4562",
    McLaren: "#FF8700",
    "Alfa Romeo": "#900000",
    Williams: "#005AFF",
    Renault: "#ffff0e",
    "Racing Point": "#cb47b1",
    "Toro Rosso": "#f9fafa",
  };
  return teamColors;
};

export const getFlagName = (data) => {
  const given = data.Driver.givenName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const family = data.Driver.familyName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return `${given}-${family}`;
};

export const getDriverImageName = (data, add = "", year = "2021") => {
  let given = data.Driver.givenName
    .substr(0, 3)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  let family = data.Driver.familyName
    .substr(0, 3)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (data.Driver.familyName === "Schumacher" && add !== "") {
    add = "02";
  }

  if (data.Driver.familyName === "Latifi" && year === 2021) {
    given = "nic";
    family = "laf";
  }

  return given + family + add;
};

export const correctLocation = (raceData) => {
  if (raceData.Circuit.Location.country === "UK") {
    return "Great%20Britain";
  }

  if (raceData.Circuit.Location.country === "UAE") {
    return "Abu%20Dhab";
  }

  return raceData.Circuit.Location.country;
};

export const correctTeamName = (teamData) => {
  if (teamData.Constructor.name === "Alfa Romeo") return "alfa-romeo-racing";
  if (teamData.Constructor.name === "Alpine F1 Team") return "alpine";
  if (teamData.Constructor.name === "Red Bull") return "red-bull-racing";

  return teamData.Constructor.name.toLowerCase().split(" ").join("-");
};
