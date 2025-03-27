import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Produits = (nameCategory,setnameCategory) => {
  const [produit, setProduit] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [shop,setShop] = useState([])
const [productSelect,setProductSelect] = useState(false)
console.log(productSelect)
  const propsNameCategory = nameCategory.nameCategory
  

  
  
  

  
  


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
      
      {propsNameCategory && produit[propsNameCategory].map((element) => {
        
        return ( 
          <div key={element.id} className="product" onClick={() =>{
            console.log(shop)
            const copyshop = [...shop
            ]
            const existItem = copyshop.find()
            if(existItem){
              copyshop.push({element,quantity:1})
            setShop(copyshop)
              
            }else{
              existItem.quantity +=1
              setShop(copyshop)
            }
            
            
            
          }}>
            <div className="test">

           
            <div onClick={()=>{
              setProductSelect(true)
            }} className={productSelect && "product-select"}>
            <p>{element.nom}</p>
            <img src={element.image} alt={element.nom}/>
            <p> {element.prix} </p>
            </div>
            </div>
          </div>
        )
      })} 
      
    </>
  );
};
export default Produits;
