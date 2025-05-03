import React, { createContext, useState } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [user, setUser] = useState({
    user_Id: 0,
    user_name: "Guest",
    user_email: "guest@finomics.com.pk",
    status:"guest"
  });
  const [goal, setGoal] = useState({
    
    //   target:0,
    // initialContribution:0,
    // recurring:0,
    // timeHorizon:0,
  });
  const [riskProfile, setRiskProfile] = useState({
    score:"Medium"
   });
  const [fund, setFund] = useState({});
  const [tvm, settvm] = useState({});
  return (
    <StoreContext.Provider value={{ user, setUser,goal,setGoal,riskProfile,setRiskProfile,tvm,settvm,fund,setFund }}>
      {children}
    </StoreContext.Provider>
  );
};
