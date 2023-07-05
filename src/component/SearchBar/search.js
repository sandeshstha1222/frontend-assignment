import React, { useState, useEffect, useMemo } from "react";
// import searchbox from "./popup";
import "./search.css";
import { BiSearch, BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { AiOutlineCloseSquare, AiOutlineEnter } from "react-icons/ai";
import { LuLayoutList } from "react-icons/lu";
import axios from "axios";

const Search = () => {
  const [input, setInput] = useState();
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const [productDetails, setProductDetails] = useState({
    title: "",
    description: "",
    image: "",
  });

  const toggleModal = () => {
    setModal(!modal);
  };

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
      <div className="Products-list">
        <p>LIST OF PRODUCTS</p>
        {products.map((products) => {
          const { id, title, price, description, category, image, rating } =
            products;

          return (
            <div className="products-display" onClick={toggleModal}>
              <img src={image} style={{ width: "13em", height: "13em" }} />
              {title}
              <br />
              {price}$
            </div>
          );
        })}
      </div>
      {modal && (
        <div className="productDetails">
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="Product-content">
              <button className="close-button" onClick={toggleModal}>
                CLOSE
              </button>
              <div className="three-bodies">
                <div style={{ marginTop: "4em" }}>
                  <img style={{ width: "25em" }} src={image} alt="PROJECT" />
                </div>
                <div className="middle">
                  <div
                    style={{
                      textAlign: "center",
                      border: "2px solid #3cb100",
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
                      Amount Needed
                    </a>
                    <p
                      style={{
                        border: "5px solid #3cb100",
                      }}
                    >
                      {productDetails.target} JKT
                    </p>
                  </div>
                  <div
                    style={{
                      marginTop: "2em",
                      textAlign: "center",
                      border: "2px solid #3cb100",
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
                      Amount Collected
                    </a>

                    <p
                      style={{
                        border: "5px solid #3cb100",
                      }}
                    >
                      {totalCollectedFund / 10 ** 18} JKT
                    </p>
                  </div>
                </div>
                <div className="input">
                  <input
                    placeholder="JKT Token"
                    type="number"
                    name="token"
                    value={values.token}
                    onChange={handleChange}
                  />

                  <button
                    style={{ margin: "15px 0 0 0px" }}
                    onClick={() => {
                      donate(productDetails);
                    }}
                  >
                    DONATE
                  </button>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "Bebas Neue",
                  fontSize: "2em",
                  marginLeft: "0.79em",
                }}
              >
                {productDetails.title}
              </p>
              <p style={{ fontFamily: "Source Sans Pro", marginLeft: "1.6em" }}>
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

// const [productDetails, setproductDetails] = useState({
//     _id: "",
//     projectName: "",
//     projectInfo: "",
//     numOfBeneficiary: "",
//     target: "",
//     startDate: "",
//     deadline: "",
//     contractAddress: "",
//   });

//   const [values, setValues] = useState({
//     token: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const [modal, setModal] = useState(false);
//   const [projectData, setProjectData] = useState([]);

//   const [status, setStatus] = useState(false);
//   const [totalCollectedFund, setTotalCollectedFund] = useState(0);

//   // Donation or Transfer amount from one account to another
//   const fetchTransfer = (address, amount) => {
//     console.log(address, amount);
//     transact(address.toString(), (values.token * 10 ** 18).toString())
//       .then((balance) => {
//         console.log("sdfdsaf", balance);
//         setStatus(true);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   //call donateToken method of contract
//   // const FetchTransfer = (amount) => {
//   //   donate((values.token * 10 ** 18).toString())
//   //     .then((balance) => {
//   //       console.log("donated tokens", balance);
//   //       setStatus(true);
//   //     })
//   //     .catch((err) => {
//   //       console.log(err);
//   //     });
//   // };

//   // useEffect(() => {
//   //   seeBalance(productDetails.contractAddress);
//   //   // .then((balance) => {
//   //   //   console.log("sdfsdfsfdfdsfsd", balance);
//   //   // })
//   //   // .catch((err) => {
//   //   //   console.log(err);
//   //   // });
//   // }, [status]);

//   const handleChange = (e) => {
//     console.log(values);
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//   };

//   const donate = (productDetails) => {
//     console.log("dfdsf");

//     donateFund(values.token)
//       .then((data) =>
//         seeBalance()
//           .then(async (balance) => {
//             console.log("dsfdfsff", balance);
//             setTotalCollectedFund(balance);
//             transactionDetails()
//               .then((data) => {
//                 console.log("transaction details", data);
//                 axios
//                   .post("/trial", {
//                     projectId: productDetails._id,
//                     projectName: productDetails.projectName,
//                     numOfBeneficiary: productDetails.numOfBeneficiary,
//                     projectInfo: productDetails.projectInfo,
//                     startDate: productDetails.startDate,
//                     deadline: productDetails.deadline,
//                     target: productDetails.target,
//                     fromAccountAddress: data.from,
//                     toAccountAddress: data.to,
//                     donatedJktAmount: values.token,
//                   })
//                   .then((res) => {
//                     console.log("Project Donar Details", res);
//                   })
//                   .catch((err) => {
//                     console.log(err);
//                   });
//               })
//               .catch((err) => console.log(err));
//           })
//           .catch((err) => {
//             console.log(err);
//           })
//       )
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   // const donorLog = () => {
//   //   console.log("request Data", productDetails);

//   //   axios
//   //     .post("/project/savedonorlog", {
//   //       projectId: productDetails._id,
//   //       projectName: productDetails.projectName,
//   //       numOfBeneficiary: productDetails.numOfBeneficiary,
//   //       projectInfo: productDetails.projectInfo,
//   //       startDate: productDetails.startDate,
//   //       deadline: productDetails.deadline,
//   //       target: productDetails.target,
//   //       accountAddress: "productDetails",
//   //       donatedJktAmount: values.token,
//   //     })
//   //     .then((res) => {
//   //       console.log("Project Donar Details", productDetails);
//   //     })
//   //     .catch((err) => {
//   //       console.log(err);
//   //     });
//   // };

//   const refunds = () => {
//     refund()
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   const toggleModal = (projects) => {
//     setModal(!modal);
//   };

//   if (modal) {
//     document.body.classList.add("active-modal");
//   } else {
//     document.body.classList.remove("active-modal");
//   }
//   useEffect(() => {
//     axios.get("/Project").then((res) => setProjectData(res.data.projects));
//     // startProject();
//   }, []);

//   const donateDetails = (projects) => {
//     seeBalance()
//       .then((balance) => {
//         console.log("dsfdfsff", balance);
//         setTotalCollectedFund(balance);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     approved();
//     setproductDetails(projects);
//     console.log(projects);
//   };

//   const startProject = (projects) => {
//     console.log(projects, "Show Project");
//     axios
//       .post("/donor/donate", {
//         contractAddress: projects.contractAddress,
//       })
//       .then((response) => {
//         console.log(projects, "Show Project");
//         console.log(response.data.message);
//         if (response.data.message === "yes u can donate. go for it") {
//           console.log("You can Donate");
//         } else if (response.data.message === "no u cannot donate now") {
//           console.log("you cannot donate");
//           toast.warn("Donation hasnot been Started Yet");
//         }
//       });
//   };

//   return (
//     <div className="Project-Body">
//       <DonarNavar />
//       <div className="Project-Whole-Body">
//         <div style={{ width: "100%", marginTop: "6em" }}>
//           <div
//             style={{
//               textAlign: "center",
//               fontSize: "20px",
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             <p
//               style={{
//                 border: "2px solid #3cb100",
//                 borderRadius: "5px",
//                 padding: "5px 20px 5px 20px",
//                 color: "white",
//                 background: "#3cb100",
//               }}
//             >
//               Projects
//             </p>
//           </div>
//           <hr style={{ marginTop: "2em", color: "red" }} />

//           {/* fetching projects data from Database */}
//           {projectData.map((projects) => {
//             const {
//               _id,
//               projectName,
//               projectInfo,
//               beneficiaries,
//               target,
//               startDate,
//               deadline,
//             } = projects;

//             return (
//               <div className="Projects-Data" key={beneficiaries._id}>
//                 <img
//                   style={{ width: "100%", height: "15em" }}
//                   src={charity}
//                   alt="PROJECT"
//                 />
//                 <div className="Projects">
//                   <div className="ProjectName">
//                     {/* <p>{beneficiaries[0].email}</p> */}
//                     <p>{projectName}</p>
//                   </div>
//                   <p>
//                     {projectInfo.length > 200
//                       ? `${projectInfo.substring(0, 200)}...`
//                       : projectInfo}
//                     <a
//                       style={{
//                         color: "#3b9d0a",
//                         cursor: "pointer",
//                         fontFamily: "Source Sans Pro",
//                         fontWeight: "600",
//                       }}
//                       onClick={(e) => {
//                         donateDetails(projects);
//                         toggleModal();
//                       }}
//                     >
//                       ...Readmore
//                     </a>
//                   </p>
//                   {/* <hr style={{ width: "26em" }} /> */}
//                   <div className="donate-button-border">
//                     {/* <Link to="/productDetails"> */}
//                     <button
//                       className="Donate-Button"
//                       onClick={(e) => {
//                         donateDetails(projects);
//                         console.log(_id);
//                         toggleModal();
//                         startProject(projects);
//                       }}
//                     >
//                       DONATE NOW
//                     </button>

//                     <button className="Donate-Button" onClick={refunds}>
//                       Refund
//                     </button>
//                     {/* </Link> */}
//                   </div>
//                   <div className="restDetails">
//                     <p>
//                       {target} <a>JKT Needed</a>
//                     </p>
//                     <p>StartDate: {startDate} </p>
//                     <p>EndDate: {deadline}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {modal && (
//         <form onSubmit={handleSubmit}>
//           <div className="productDetails" method="POST">
//             <div className="modal">
//               <div onClick={toggleModal} className="overlay"></div>
//               <div className="Project-content">
//                 <button className="close-button" onClick={toggleModal}>
//                   CLOSE
//                 </button>
//                 <div className="three-bodies">
//                   <div style={{ marginTop: "4em" }}>
//                     <img
//                       style={{ width: "25em" }}
//                       src={charity}
//                       alt="PROJECT"
//                     />
//                   </div>
//                   <div className="middle">
//                     <div
//                       style={{
//                         textAlign: "center",
//                         border: "2px solid #3cb100",
//                         borderRadius: "3px",
//                       }}
//                     >
//                       <a
//                         style={{
//                           fontFamily: "Bebas Neue",
//                           fontSize: "25px",
//                           padding: "30px",
//                         }}
//                       >
//                         Amount Needed
//                       </a>
//                       <p
//                         style={{
//                           border: "5px solid #3cb100",
//                         }}
//                       >
//                         {productDetails.target} JKT
//                       </p>
//                     </div>
//                     <div
//                       style={{
//                         marginTop: "2em",
//                         textAlign: "center",
//                         border: "2px solid #3cb100",
//                         borderRadius: "3px",
//                       }}
//                     >
//                       <a
//                         style={{
//                           fontFamily: "Bebas Neue",
//                           fontSize: "25px",
//                           padding: "30px",
//                         }}
//                       >
//                         Amount Collected
//                       </a>

//                       <p
//                         style={{
//                           border: "5px solid #3cb100",
//                         }}
//                       >
//                         {totalCollectedFund / 10 ** 18} JKT
//                       </p>
//                     </div>
//                   </div>
//                   <div className="input">
//                     <input
//                       placeholder="JKT Token"
//                       type="number"
//                       name="token"
//                       value={values.token}
//                       onChange={handleChange}
//                     />

//                     <button
//                       style={{ margin: "15px 0 0 0px" }}
//                       onClick={() => {
//                         donate(productDetails);

//                       DONATE
//                     </button>
//                   </div>
//                 </div>
//                 <p
//                   style={{
//                     fontFamily: "Bebas Neue",
//                     fontSize: "2em",
//                     marginLeft: "0.79em",
//                   }}
//                 >
//                   {productDetails.projectName}
//                 </p>
//                 <p
//                   style={{ fontFamily: "Source Sans Pro", marginLeft: "1.6em" }}
//                 >
//                   {productDetails.projectInfo}
//                 </p>
