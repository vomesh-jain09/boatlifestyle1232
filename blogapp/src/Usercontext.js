import React, { useState } from "react";
let Usercontext= React.createContext();
export default Usercontext;
function UsercontextProvider({children}){
    const[user,setUser]=useState(null);
function makeUser(obj){
  setUser(obj);
}
    return(
        <Usercontext.Provider value={{user,makeUser}}>
            {children}
        </Usercontext.Provider>
    )
}
export{UsercontextProvider};