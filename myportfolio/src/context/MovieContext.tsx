import { createContext, useState } from "react";
import card from "../data/card";
interface propsType{
    children:any
}
type Contexttype={}[]

export const MovieContext = createContext<Contexttype>([]);

export const MovieProvider = (props:propsType) => {
  const [movies, setMovies] = useState<Contexttype>(card);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};