
import React,{useState,createContext, useEffect} from "react";
import { initialState } from "react-use-cart";
// import Userdata from '../data/Userdata'
interface propType{
    children?: JSX.Element|JSX.Element[];
}
function setLocalStorage(key:any, value:any) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
    }
  }
  
  function getLocalStorage(key:any, initialValue:any) {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (e) {
      return initialValue;
    }
  }
type AppContextType = {}
export const UserContext = createContext<AppContextType|null>(null);
export const UserProvider =(props:propType)=>{
    const [users,setUsers] =useState(() => getLocalStorage("user", false));;
    useEffect(() => {
        setLocalStorage("user", users);
      }, [users]);
    return(
        <UserContext.Provider value={[users,setUsers]}>
            {props.children}
        </UserContext.Provider>
    )

}
