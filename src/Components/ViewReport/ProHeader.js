import React, { useState } from "react";

const Header = (props) => {
  const { name } = props;
  const [color, setColor] = useState("");
  const [font, setFont] = useState("");

  const handler = (e) => {
    console.log(e.target.checked);
    if (e.target.checked === true) {
      setColor("#5955d8");
      setFont("#ffffff");
      
    } else {
      setColor("#efefef");
      setFont("");
    }
  };

  return (
    <label setColor={color}>
      <div style={{ background: color, color: font }} setFont={font}>
        {name}
      </div>
      <input onChange={handler} type="checkbox"></input>
    </label>
  );
};

export default Header;
