import React from "react";

export default ({ name, label, value, onChange }) => (
  <div className="w-100 pa3">
    <label className="black-60 pointer" htmlFor={name}>
      {label}
    </label>
    <input
      id={name}
      type="text"
      className="w-100 h3 ba pa1 bw1 mt2 b--nearmiss-black nearmiss_input_text"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
);
