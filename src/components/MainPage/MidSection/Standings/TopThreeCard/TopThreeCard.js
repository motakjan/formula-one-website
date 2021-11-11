import React from "react";
import {
  getFlagName,
  getDriverImageName,
} from "../../../../../queries/staticData";

export const TopThreeCard = ({ place, data, teamColor, year }) => {
  console.log(year);
  const getStripes = () => {
    let stripes = [];
    for (let i = 0; i < place; i++) {
      stripes.push(
        <div
          className="bar"
          key={`bar-${i}-${place}`}
          style={{ backgroundColor: teamColor }}
        >
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
          src={`https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/${year}/${getDriverImageName(
            data
          )}01.png.transform/2col/image.png`}
          alt={`${getDriverImageName(data)}-1-main`}
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
            src={`https://www.formula1.com/content/fom-website/en/drivers/${getFlagName(
              data
            )}/_jcr_content/countryFlag.transform/1col/image.png`}
            alt={`${getFlagName(data)}-1-flag`}
          />
        </div>
        <p className="last">{data.Driver.familyName}</p>
      </div>
    </div>
  );
};
