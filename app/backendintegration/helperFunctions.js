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

 /// tvm function

 export const  timeToTargetFutureValue=(FV, PV, PMT, frequency, annualRate) =>{
  // Convert annual rate to decimal
  let r = annualRate / 100;
  // Periodic rate
  let n = frequency;
  let periodicRate = r / n;

  // Avoid division by zero when PMT is zero
  if (periodicRate === 0) {
      return Infinity;
  }

  // Calculate time in years
  let numerator = Math.log((FV + (PMT / periodicRate)) / (PV + (PMT / periodicRate)));
  let denominator = n * Math.log(1 + periodicRate);
  let years = numerator / denominator;

  // Convert to days
  let days = years * 365;
  console.log("TVM in helper",FV, PV, PMT, frequency, annualRate,years);
  const formatteddays=formatDays(Math.ceil(days));

  return {days:days,label:formatteddays};

}

// tvm function end

//- format days

function formatDays(days) {
  if (typeof days !== 'number' || isNaN(days) || days < 0) {
    return "Invalid input. Please provide a non-negative number of days.";
  }

  const years = Math.floor(days / 365);
  const remainingDaysAfterYears = days % 365;
  const months = Math.floor(remainingDaysAfterYears / 30); // Approximate months (30 days each)
const daysleft=remainingDaysAfterYears % 30
  let output = "";

  if (years > 0) {
    output += years + " Year";
    if (years > 1) {
       output += "s"; //pluralize year
    }
    
    if (months > 0) {
      output += " and " + months + " Month";
      if(months > 1){
        output += "s"; //pluralize month
      }
    }
  } else if (months > 0) {
    output += months + " Month";
    if (months > 1) {
      output += "s"; //pluralize month
    }
  } else {
    output = "Less than a month"; // Handle cases less than a month
  }
  

  return output.trim(); // Remove any trailing spaces.
}

 export const  groupSumbyId=(payments) =>{

  const groupedByGoal = payments.reduce((acc, { goal_id, amount, goalName }) => {
    if (!acc[goal_id]) {
        acc[goal_id] = { goal_id, goalName, totalAmount: 0 };
    }
    acc[goal_id].totalAmount += amount;
    return acc;
}, {});

const result = Object.values(groupedByGoal);
console.log("Grouped",result);
return result;
}


// Test cases
console.log(formatDays(400));    // Output: 1 Year and 1 Month
console.log(formatDays(730));    // Output: 2 Years
console.log(formatDays(365));    // Output: 1 Year
console.log(formatDays(30));     // Output: 1 Month
console.log(formatDays(60));     // Output: 2 Months
console.log(formatDays(15));     // Output: Less than a month
console.log(formatDays(0));      // Output: Less than a month
console.log(formatDays(1000));   // Output: 2 Years and 9 Months
console.log(formatDays(-10));    // Output: Invalid input. Please provide a non-negative number of days.
console.log(formatDays("abc"));   // Output: Invalid input. Please provide a non-negative number of days.
console.log(formatDays(395)); // Output: 1 Year and 1 Month
console.log(formatDays(366)); // Output: 1 Year and 0 Months (or just "1 Year")








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
