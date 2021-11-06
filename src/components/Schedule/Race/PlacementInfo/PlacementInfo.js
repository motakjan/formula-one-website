import React from "react";

export const PlacementInfo = ({ info, place }) => {
  const getImageName = () => {
    const given = info.Driver.givenName
      .substr(0, 3)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const family = info.Driver.familyName
      .substr(0, 3)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    return given + family;
  };
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
        src={`https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2021/${getImageName()}01.png.transform/2col/image.png`}
        alt={`${getImageName()}-1`}
      />
    </span>
  );
};
