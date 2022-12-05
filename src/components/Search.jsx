import React from "react";
import { SearchRounded } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(input);
  }, [input]);

  const submitHandler = (e) => {
    e.preventDefault();

    navigate("/search/" + input);

    setInput("");
  };

  return (
    <form className="inputBox" onSubmit={submitHandler}>
      <SearchRounded className="searchIcon" />
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

export default Search;
