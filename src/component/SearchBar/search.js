import React, { useState, useEffect, useMemo } from "react";
// import searchbox from "./popup";
import "./search.css";
import { BiSearch, BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { AiOutlineCloseSquare, AiOutlineEnter } from "react-icons/ai";
import { LuLayoutList } from "react-icons/lu";
import axios from "axios";

const Search = () => {
  const [search, setSearch] = useState();
  const [quantity, setQuantity] = useState();
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const [productDetails, setProductDetails] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
  });

  const toggleModal = (products) => {
    setModal(!modal);
    console.log(products);
    setProductDetails(products);
    console.log(productDetails.title);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);

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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ fontSize: "1em" }}
              />
              {console.log(search)}
            </div>
          </div>
          <div style={{ paddingRight: "8px" }}>
            <button className="btn">SEARCH</button>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div className="Products-list">
        <p>LIST OF PRODUCTS</p>
        {products
          .filter((products) => {
            console.log(products.title);
            if (search) {
              return search.toString().toLowerCase() === ""
                ? products
                : products.title
                    .toString()
                    .replace(/[^\w\s]-/, "")
                    .toLowerCase()
                    .includes(search.toString().toLowerCase());
            } else return products;
          })
          .map((products) => {
            const { id, title, price, description, category, image, rating } =
              products;

            return (
              <div
                className="products-display"
                onClick={() => {
                  toggleModal(products);
                }}
              >
                <img src={image} style={{ width: "13em", height: "13em" }} />
                {title}
                <br />
                {price}$<br />
                <button
                  onClick={() => {
                    toggleModal(products);
                  }}
                  className="btn"
                  style={{ marginTop: "1.5em", padding: "0 15px" }}
                >
                  Buy
                </button>
              </div>
            );
          })}
      </div>
      {modal && (
        <div className="productDetails">
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="Product-content">
              <button className="btn" onClick={toggleModal}>
                CLOSE
              </button>
              <div className="three-bodies">
                <div style={{ marginTop: "4em" }}>
                  <img
                    style={{ width: "10em" }}
                    src={productDetails.image}
                    alt="PRODUCT"
                  />
                </div>
                <div className="middle">
                  <div
                    style={{
                      textAlign: "center",
                      border: "2px solid rgb(6, 121, 197)",
                      borderRadius: "3px",
                    }}
                  >
                    <a
                      style={{
                        fontFamily: "Bebas Neue",
                        fontSize: "25px",
                        padding: "30px",
                      }}
                    >
                      Price
                    </a>
                    <p
                      style={{
                        border: "5px solid rgb(6, 121, 197)",
                      }}
                    >
                      {productDetails.price} $
                    </p>
                  </div>
                </div>
                <div className="input">
                  <input
                    placeholder="Quantity"
                    type="number"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />

                  <button className="Buy">BUY</button>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "Bebas Neue",
                  fontSize: "2em",
                  fontWeight: "400",
                  marginRight: "17.5em",
                }}
              >
                {productDetails.title}
              </p>
              <p
                style={{
                  fontFamily: "Source Sans Pro",
                  marginLeft: "1.6em",
                  fontWeight: "400",
                  marginRight: "7 em",
                }}
              >
                {productDetails.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
