import React, { useState } from "react";
import PortfoliosList from "../data/lists/PortfoliosList";
import PortfolioFilter from "../forms/PortfoliosFilter";

function PortfolioPage({ portfolios }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [displayedPortfolios, setDisplayedPortfolios] = useState(portfolios);
  const getSelectedCategories = (category) => {
    console.log(category);
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
      return;
    }
    setSelectedCategories([...selectedCategories, category]);
  };
  const [cmsSelected, setCmsSelected] = useState();
  const [technologySelected, setTechnologySelected] = useState();
  const [tailwindSelected, setTailwindSelected] = useState(false);
  const allCMS = portfolios
    .map((cms) => cms.fields.cms)
    .flat()
    .reduce((arr, val) => {
      if (!arr.includes(val)) arr.push(val);
      return arr;
    }, []);
  const allTechnology = portfolios
    .map((technology) => technology.fields.technology)
    .flat()
    .reduce((arr, val) => {
      if (!arr.includes(val)) arr.push(val);
      return arr;
    }, []);
  return (
    <div className="flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0 mt-9">
      <PortfoliosList
        portfolios={displayedPortfolios}
        cmsSelected={cmsSelected}
        technologySelected={technologySelected}
        tailwindSelected={tailwindSelected}
      />
      <PortfolioFilter
        allCMS={allCMS}
        allTechnology={allTechnology}
        changeCms={setCmsSelected}
        changeTechnology={setTechnologySelected}
        changeTailwind={setTailwindSelected}
      />
    </div>
  );
}

export default PortfolioPage;
