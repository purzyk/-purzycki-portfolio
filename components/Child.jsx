import React, { useState } from "react";

const Child = ({ name, change }) => {
  const [newName, setNewName] = useState(name);
  const text = "dupablablbla";
  return (
    <div>
      <button onClick={() => change(text)}>Change</button>
    </div>
  );
};

export default Child;
