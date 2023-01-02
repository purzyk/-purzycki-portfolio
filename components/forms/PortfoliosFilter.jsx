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
    <div className="pt-8">
      <div className="flex flex-col">
        <form className="mb-8">
          <h2 className="text-xl">Technology</h2>
          <div>
            <input
              type="radio"
              id="allTech"
              name="technology"
              value="all"
              onChange={handleChangeTech}
            />
            <label className="text-base  ml-4 capitalize" htmlFor="allTech">
              all
            </label>
          </div>
          {allTechnology.map((category) => (
            <div key={category}>
              <input
                type="radio"
                id={category}
                name="technology"
                value={category}
                onChange={handleChangeTech}
              />
              <label className="text-base  ml-4 capitalize" htmlFor={category}>
                {category}
              </label>
            </div>
          ))}
        </form>
        <form>
          <h2 className="text-xl">CMS</h2>
          <div>
            <input
              type="radio"
              id="all"
              name="cms"
              value="all"
              onChange={handleChangeCms}
            />
            <label className="text-base  ml-4 capitalize" htmlFor="all">
              all
            </label>
          </div>
          {allCMS.map((category) => (
            <div key={category}>
              <input
                type="radio"
                id={category}
                name="cms"
                value={category}
                onChange={handleChangeCms}
              />
              <label className="text-base ml-4 capitalize" htmlFor={category}>
                {category}
              </label>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default PortfolioFilter;
