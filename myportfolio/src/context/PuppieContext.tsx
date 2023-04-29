import { createContext, useState } from "react";
import card from "../data/card";
import adoption from "../data/adoption";
interface propsType{
    children:any
}
type Contexttype={}[]

export const PuppieContext = createContext<Contexttype>([]);

export const PuppieProvider = (props:propsType) => {
  const [puppie, setPuppie] = useState<Contexttype>(adoption);

  return (
    <PuppieContext.Provider value={ [puppie, setPuppie]}>
      {props.children}
    </PuppieContext.Provider>
  );
};