import React from "react";
import { Title } from "../../UI/Title/Title";
import { Standings } from "./Standings/Standings";

export const MidSection = () => {
  return (
    <div className="main-body-dark white-text main-page-padding mid-section-page">
      <div className="text-wrapper">
        <Title
          title="Standings"
          subtitle="CURRENT STANDINGS FOR SEASON 2021"
          light
        />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ut iusto
        deleniti at in. Totam, nostrum quae! Officiis aspernatur voluptates
        cumque eligendi distinctio possimus pariatur asperiores obcaecati omnis,
        sit explicabo! Reiciendis quae deserunt eveniet beatae velit assumenda
        totam labore, placeat perferendis accusantium? Culpa aliquid
        consequuntur est aut, autem beatae quis in labore! Voluptatum voluptas
        laboriosam, nam dolorum nulla voluptate corporis? Fugiat ullam maxime
        consequuntur alias, dignissimos amet pariatur fuga, facere, aliquam
        provident minima odit qui ipsam nemo dolorum minus! Sapiente dolor
        architecto iusto odio beatae eligendi sed eius ut adipisci! Deleniti,
        repellat natus? Facere eligendi, porro dolores quidem qui sit pariatur
        reprehenderit nemo ea tempore, dicta ullam nostrum accusamus nisi
        incidunt omnis animi fugit unde numquam. Ut ad ipsa optio?
      </div>
      <Standings />
    </div>
  );
};
