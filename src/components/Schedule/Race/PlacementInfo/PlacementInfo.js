import React from "react";
import { getDriverImageName } from "../../../../queries/staticData";

export const PlacementInfo = ({ info, place, year }) => {
  return (
    <span className="placement-driver">
      <span>
        {`${place}. ${info.Driver.givenName} `}
        <strong>{info.Driver.familyName.toUpperCase()} </strong>
        <br />
        <i className="placement-team">({info.Constructor.name})</i>
      </span>

      <img
        className="placement-driver-image"
        src={`https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/${year}/${getDriverImageName(
          info
        )}01.png.transform/2col/image.png`}
        alt={`${getDriverImageName(info, year)}-1`}
      />
    </span>
  );
};
