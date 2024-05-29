import React from "react";

const MyInput = ({ data, setUser }) => {
  const changeHandler = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <label htmlFor={data.name}>{data.label}</label>
      <input
        onChange={changeHandler}
        name={data.name}
        placeholder={data.name}
      />
    </div>
  );
};
export default MyInput;