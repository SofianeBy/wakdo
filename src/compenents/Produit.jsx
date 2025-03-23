import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Category from "../../categories.json";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Produits = (nameCategory,setnameCategory) => {
  const [produit, setProduit] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [shop,setShop] = useState()

  
  
  {console.log(shop)}

  
  


  useEffect(() => {
    const fetchProduit = async () => {
      try {
        const response = await axios.get(
          `https://s3.eu-west-3.amazonaws.com/cdn.alpha.tech/646736d86ed3050008a172d0/exercises/wakdo/produits.json`
        );
        

        setProduit(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduit();
  }, []);
  return isLoading ? (
    <p>Chargement ...</p>
  ) : (
    <>
    
    
      <p className="menu-nav">Produit</p>
      
      {produit.menus.map((element) => {
        
        
        return (
          <>
          <section className="product">
            <div className="productColor" onClick={()=>{
            
              

            }}>
            <div>{element.nom}</div>
            <div>{element.image}</div>
            <div>{element.prix}</div>;
            </div>
            </section>
          </>
        );
      })}
    </>
  );
};
export default Produits;
