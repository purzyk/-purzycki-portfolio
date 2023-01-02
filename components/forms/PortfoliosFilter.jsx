import React, { useState } from "react";

const PortfolioFilter = ({
  allCMS,
  allTechnology,
  changeCms,
  changeTechnology,
  changeTailwind,
}) => {
  const cms = "kentico";
  const technology = "PHP";
  const tailwind = true;
  // 👇️ initialize state to default checked radio button
  const [selected, setSelected] = useState("yes");

  const handleChangeCms = (event) => {
    changeCms(event.target.value);
  };
  const handleChangeTech = (event) => {
    changeTechnology(event.target.value);
  };

  return (
    <div>
      <div className="flex flex-col">
        <div>
          <h2>CMS</h2>
          <div>
            <input
              type="radio"
              id="all"
              name="choose"
              value="all"
              onChange={handleChangeCms}
            />
            <label htmlFor="all">all</label>
          </div>
          {allCMS.map((category) => (
            <div key={category}>
              <input
                type="radio"
                id={category}
                name="choose"
                value={category}
                onChange={handleChangeCms}
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>
        <div>
          <h2>CMS</h2>
          <div>
            <input
              type="radio"
              id="all"
              name="choose"
              value="all"
              onChange={handleChangeTech}
            />
            <label htmlFor="all">all</label>
          </div>
          {allTechnology.map((category) => (
            <div key={category}>
              <input
                type="radio"
                id={category}
                name="choose"
                value={category}
                onChange={handleChangeTech}
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>
      </div>
      Tailwind select
      <br />
      <button onClick={() => changeTailwind(tailwind)}>tailwind</button>
    </div>
  );
};

export default PortfolioFilter;
