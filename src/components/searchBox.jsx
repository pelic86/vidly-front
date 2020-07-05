import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      query="query"
      className="form-control my-3"
      placeholder="Search..."
      value={value}
      onChange={(event) => onChange(event.currentTarget.value)}
    />
  );
};

export default SearchBox;
