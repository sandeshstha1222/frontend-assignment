import React, { useState, useEffect, useMemo } from "react";
// import searchbox from "./popup";
import "./search.css";
import { BiSearch, BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { AiOutlineCloseSquare, AiOutlineEnter } from "react-icons/ai";
import { LuLayoutList } from "react-icons/lu";
import axios from "axios";

const Search = () => {
  const [input, setInput] = useState();

  return (
    <div className="Products">
      <div className="SearchBar">
        <div className="ecommerce-text">
          <p>
            <a style={{ fontSize: "25px", color: "rgb(6, 121, 197)" }}>e</a>
            <a style={{ fontSize: "30px" }}>Commerce</a>
          </p>
        </div>
        <div className="Search">
          <div className="search-part">
            <div className="icons">
              <BiSearch id="search-icon" size="1em" color=" rgb(79, 79, 79)" />
              <input
                placeholder="Search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{ fontSize: "1em" }}
              />
            </div>
          </div>
          <div style={{ paddingRight: "8px" }}>
            <button className="btn">SEARCH</button>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div className="Products-list">{map}</div>
    </div>
  );
};

export default Search;
