import { createContext, useEffect, useState } from "react";
import shop from "../data/shop";
interface propType{
  children:any[],
}
type ContextType = {}[]
export const ProductContext = createContext<ContextType>([]);
export const  ProductProvider = (props:propType)=>{
    const [product,setProduct] = useState<ContextType>(shop);
    return (
      <ProductContext.Provider value={[product,setProduct]}>
        {props.children}
      </ProductContext.Provider>
    )
} 