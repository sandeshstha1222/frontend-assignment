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
    <div>
      <div className="SearchBar">
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
            {/* <div className="icons">
              <LuLayoutList />
              <AiOutlineCloseSquare />
            </div> */}
          </div>
          <div style={{ paddingRight: "8px" }}>
            <button className="btn">SEARCH</button>
          </div>

          {/* <div className="Navigation-Part">
            <div className="icons">
              <BiUpArrowAlt className="arrow" />
              <BiDownArrowAlt className="arrow" />
              to navigate
            </div>
            <div className="icons"> 
              <AiOutlineEnter className="arrow" />
              to select
            </div>
            <div className="icons">
              <p>esc</p> to close
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Search;
