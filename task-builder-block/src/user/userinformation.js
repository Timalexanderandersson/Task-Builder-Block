import { createContext, useEffect, useState } from "react";
import api from "../api/api";


export const CurrentUserInfo = createContext();
export const SetCurrentUserInfo = createContext();

export const Userinformation = ({ children }) => {

    const [currentuser, setCurrentuser] = useState(null)
    const [errors, setError] = useState({})

    
    const collectInfo = async () => {
      try {
        const { data } = await api.post("/dj-rest-auth/user/");
        setCurrentuser(data);
      } catch (err) {}
    };


    useEffect(() => {
      const Gettinguser = localStorage.getItem("currentUser");
      if (Gettinguser) {
        const thisisuser = JSON.parse(Gettinguser);
        setCurrentuser(thisisuser);
        collectInfo();
      }
      
    }, []);


    return (
        <CurrentUserInfo.Provider value={currentuser}>
      <SetCurrentUserInfo.Provider value={setCurrentuser}>
        {children}
      </SetCurrentUserInfo.Provider>
    </CurrentUserInfo.Provider>
    )

}

export default Userinformation;