import React, { useState } from "react";
import PortfolioCard from "../cards/PortfolioCard";

const PortfoliosList = ({
  portfolios,
  cmsSelected = "all",
  technologySelected = "all",
  tailwindSelected = false,
}) => {
  const filterTechnology = "";

  return (
    <div>
      {portfolios
        .filter((portfolio) => {
          if (cmsSelected !== "all") {
            return (
              portfolio.fields.cms.toLowerCase() === cmsSelected.toLowerCase()
            );
          } else {
            return portfolio;
          }
        })
        .filter((portfolio) => {
          if (technologySelected !== "all") {
            return (
              portfolio.fields.technology.toLowerCase() ===
              technologySelected.toLowerCase()
            );
          } else {
            return portfolio;
          }
        })
        .filter((portfolio) => {
          if (tailwindSelected === true) {
            return portfolio.fields.tailwindCss === true;
          } else {
            return portfolio;
          }
        })
        .map((portfolio) => (
          <PortfolioCard portfolio={portfolio} key={portfolio.sys.id} />
        ))}
    </div>
  );
};

export default PortfoliosList;
