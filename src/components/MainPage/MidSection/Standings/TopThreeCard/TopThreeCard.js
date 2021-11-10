import React from "react";

export const TopThreeCard = ({ scale, place, data, teamColor }) => {
  const getImageName = () => {
    const given = data.Driver.givenName
      .substr(0, 3)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const family = data.Driver.familyName
      .substr(0, 3)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    return given + family;
  };

  const getFlagName = () => {
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

  const getStripes = () => {
    let stripes = [];
    for (let i = 0; i < place; i++) {
      stripes.push(
        <div className="bar" style={{ backgroundColor: teamColor }}>
          &nbsp;
        </div>
      );
    }
    return stripes;
  };

  return (
    <div className={`top-three-card position-${place}`}>
      <div className="white-bg" style={{ color: teamColor }}>
        <div className="bars">{getStripes()}</div>
      </div>
      <div className="image-wrapper">
        <img
          className="driver-image"
          src={`https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2021/${getImageName()}01.png.transform/2col/image.png`}
          alt={`${getImageName()}-1-main`}
        />
      </div>

      <div className="team-color-stripe" style={{ backgroundColor: teamColor }}>
        &nbsp;
      </div>
      <div className="bottom-name">
        <div className="first-flag">
          <p className="first">{data.Driver.givenName}</p>
          <img
            className="driver-flag"
            src={`https://www.formula1.com/content/fom-website/en/drivers/${getFlagName()}/_jcr_content/countryFlag.transform/1col/image.png`}
            alt={`${getFlagName()}-1-flag`}
          />
        </div>
        <p className="last">{data.Driver.familyName}</p>
      </div>
    </div>
  );
};
