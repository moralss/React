import React, { useState } from "react";

const User = () => {
  const [name, setName] = useState("");
  const [names, saveName] = useState([]);

  return (
    <div>
      <h1>users </h1>
      {names.map(name => (
        <div>
          <span> name : {name}</span>
        </div>
      ))}
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => saveName(names.concat(name))}>save name</button>
    </div>
  );
};

export default User;
