import React, { createContext, useState } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
 const[ reload,setreload]=useState(false);
  const [user, setUser] = useState({
    user_Id: 1,
    user_name: "Guest",
    user_email: "guest@finomics.com.pk",
    status:"registered",
    riskScore:50
  });
  const [goal, setGoal] = useState({
    // goalName: "Dummy",
    // "value": 10,
    // "image": {
    //     uri: "/assets/?unstable_path=.%2Fapp%2Fassets/fitness.png",
    //     width: 512,
    //     height: 512
    // },
    // target:1000,
    // initial: 200,
    // recurring: 30,
    // frequency: "Semi-Annual",
    // status:"Draft"
  });
  const [riskProfile, setRiskProfile] = useState({
   // score:"Medium"
   });
  const [fund, setFund] = useState({
  MeanReturn:10
  });
  const [tvm, settvm] = useState({});
  return (
    <StoreContext.Provider value={{ user, setUser,goal,setGoal,riskProfile,setRiskProfile,tvm,settvm,fund,reload,setreload,setFund }}>
      {children}
    </StoreContext.Provider>
  );
};


