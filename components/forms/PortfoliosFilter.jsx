import React, { useState } from "react";

const PortfolioFilter = ({ changeCms }) => {
  const text = "kentico";
  return (
    <div>
      Filters
      <button onClick={() => changeCms(text)}>kentico</button>
    </div>
  );
};

export default PortfolioFilter;
