import React, { useState } from "react";

const PortfolioFilter = ({
  allCMS,
  allTechnology,
  changeCms,
  changeTechnology,
}) => {
  const handleChangeCms = (event) => {
    changeCms(event.target.value);
  };
  const handleChangeTech = (event) => {
    changeTechnology(event.target.value);
  };

  return (
    <div className="pt-8 flex flex-row md:flex-col">
      <form className="mb-8 mr-12 md:mr-0">
        <h2 className="text-base md:text-xl">Technology</h2>
        <div>
          <input
            className="input__radio"
            type="radio"
            id="allTech"
            name="technology"
            value="all"
            onChange={handleChangeTech}
          />
          <label className="label" htmlFor="allTech">
            all
          </label>
        </div>
        {allTechnology.map((category) => (
          <div key={category}>
            <input
              className="input__radio"
              type="radio"
              id={category}
              name="technology"
              value={category}
              onChange={handleChangeTech}
            />
            <label className="label" htmlFor={category}>
              {category}
            </label>
          </div>
        ))}
      </form>
      <form>
        <h2 className="text-base md:text-xl">CMS</h2>
        <div>
          <input
            className="input__radio"
            type="radio"
            id="all"
            name="cms"
            value="all"
            onChange={handleChangeCms}
          />
          <label className="label" htmlFor="all">
            all
          </label>
        </div>
        {allCMS.map((category) => (
          <div key={category}>
            <input
              className="input__radio"
              type="radio"
              id={category}
              name="cms"
              value={category}
              onChange={handleChangeCms}
            />
            <label className="label" htmlFor={category}>
              {category}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default PortfolioFilter;
