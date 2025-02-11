export const fillOnboarding=(data)=>{
    let payload={
      User_Reference:0,
      Full_Name:data.name,
      Father_or_Husband_Name:data.guardian,
      Relationship:"father",
      "Gender":"male",
      "Date_of_Birth":data.date.todateDtring,
      "Nationality":data.country,
      "Email_Address":data.email,
      "Contact_Number":data.contact.dial_code.toString()+data.contact.dial_number.toString(),
      "Id_Type":"",
      "Id_Number":"",
      "Id_Proof_Link":"",
      "Source_of_Income":"",
      "Proof_of_Income_Link":"",
      "Mailing_Address":"",
      "Proof_of_Address_Link":""
    }
    return payload;
  
  }

  export const findRiskProfile = (riskscore) => {
    return allRiskProfiles.find(profile => {
      return riskscore >= profile.Upper_Bound && riskscore <= profile.Lower_Bound;
    });
  };

  export const modifyRiskResponse = (riskResponse,userId) => {
    let modifiedResponse=[];
   
    riskResponse.forEach(item=>{
      const resp={
        QuestionId:item.questionId.keyId,
        AnswerId:item.selectedanswer.key
      }
      modifiedResponse.push(resp);
    })
    const returnedResponse={
userId:userId,
responses:modifiedResponse
    };
    console.log("Modified responses".returnedResponse);
    return returnedResponse;
  };

  const allRiskProfiles=[
    {
        "RiskProfileID": 3,
        "Upper_Bound": 30,
        "Lower_Bound": 39,
        "RiskProfileName": "Cautious Turtle",
        "riskLevel": 1
    },
    {
        "RiskProfileID": 4,
        "Upper_Bound": 40,
        "Lower_Bound": 49,
        "RiskProfileName": "Steady Sailor",
        "riskLevel": 2
    },
    {
        "RiskProfileID": 6,
        "Upper_Bound": 50,
        "Lower_Bound": 59,
        "RiskProfileName": "Bold Explorer",
        "riskLevel": 3
    },
    {
        "RiskProfileID": 7,
        "Upper_Bound": 60,
        "Lower_Bound": 69,
        "RiskProfileName": "Fearless Falcon",
        "riskLevel": 4
    },
    {
        "RiskProfileID": 8,
        "Upper_Bound": 70,
        "Lower_Bound": 79,
        "RiskProfileName": "Strategic Fox",
        "riskLevel": 5
    },
    {
        "RiskProfileID": 9,
        "Upper_Bound": 80,
        "Lower_Bound": 100,
        "RiskProfileName": "Daring Dragon",
        "riskLevel": 6
    }
];
