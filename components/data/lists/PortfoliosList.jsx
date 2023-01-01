import React, { useState } from "react";
import PortfolioCard from "../cards/PortfolioCard";

const PortfoliosList = ({ portfolios, cmsSelected }) => {
  const categoriesFilter = [];
  const filterCMS = null;
  const filterTechnology = "";
  const checkProps = (cmsSelected) => {
    if (cmsSelected !== undefined) {
      console.log("prop was passed");
    } else {
      console.log("prop was NOT passed");
    }
  };
  return (
    <div>
      {checkProps(cmsSelected)}

      {portfolios
        .filter((portfolio) => {
          if (cmsSelected !== undefined) {
            return (
              portfolio.fields.cms.toLowerCase() === cmsSelected.toLowerCase()
            );
          } else {
            return portfolio;
          }
        })
        .filter((portfolio) => {
          if (filterTechnology.length > 0) {
            return (
              portfolio.fields.technology.toLowerCase() ===
              filterTechnology.toLowerCase()
            );
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
