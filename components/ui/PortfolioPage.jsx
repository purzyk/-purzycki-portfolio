import React, { useState } from "react";
import PortfoliosList from "../data/lists/PortfoliosList";
import PortfolioFilter from "../forms/PortfoliosFilter";
import Header from "../globals/Header";

function PortfolioPage({ portfolios }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [displayedPortfolios, setDisplayedPortfolios] = useState(portfolios);
  const getSelectedCategories = (category) => {
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
    <div className="grid grid-cols-1 md:grid-cols-12">
      <aside className="md:col-span-3">
        <Header />
        <div className="sticky top-0">
          <PortfolioFilter
            allCMS={allCMS}
            allTechnology={allTechnology}
            changeCms={setCmsSelected}
            changeTechnology={setTechnologySelected}
          />
        </div>
      </aside>
      <section className="md:col-span-9">
        <PortfoliosList
          portfolios={displayedPortfolios}
          cmsSelected={cmsSelected}
          technologySelected={technologySelected}
        />
      </section>
    </div>
  );
}

export default PortfolioPage;
