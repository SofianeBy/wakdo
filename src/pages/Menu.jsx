import { useState, useEffect } from "react";
import axios from "axios";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Menu = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nameCategory, setnameCategory] = useState();
  
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://s3.eu-west-3.amazonaws.com/cdn.alpha.tech/646736d86ed3050008a172d0/exercises/wakdo/produits.json`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>Chargement ...</p>
  ) : (
    <>
    <div className="product-select">
      <p className="title">Menu</p>

      <div className="menu-nav">
        {data.map((element, index) => {
          {
            /* console.log(element); */
          }
          return (
            
            <section
              key={element.id}
              onClick={() => {
                setnameCategory(element.title)
              }}
            >
              <img src={element.image} alt={element.title} />
              <h2>{element.title}</h2>
              {/* <div>{console.log(data[nameCategory][index])}</div> */}
              
            </section>
            
          );
        })}s
      </div>
      
      <Produits nameCategory = {nameCategory} setnameCategory ={setnameCategory} />
      </div>
    </>
  );
};
export default Menu;
