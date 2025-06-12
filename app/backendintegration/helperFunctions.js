
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
   const profile= allRiskProfiles.find(profile => {
      return riskscore >= profile.Upper_Bound && riskscore <= profile.Lower_Bound;
    });
    console.log("Profile in Find Risk Profile",riskscore,profile);
    return profile;
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
// modify RiskQuestionaire
const modifyRiskQuestionaire=(data)=>{
  const modifiedData = data.map(item => ({
    ...item,
    answers: JSON.parse(item.answers)
  }));
  return modifiedData;
}

 /// tvm function
export const timeToTargetFutureValue = (FV, PV, PMT, frequency, annualRate) => {
  console.log("values to calculate tvm", FV, PV, PMT, frequency, annualRate);

  // Convert frequency string to number of compounding periods per year
  const frequencyMap = {
    daily: 365,
    weekly: 52,
    biweekly: 26,
    monthly: 12,
    quarterly: 4,
    semiannually: 2,
    annually: 1
  };

  const n = frequencyMap[frequency.toLowerCase()];
  if (!n) {
    throw new Error(`Invalid frequency: ${frequency}`);
  }

  // Convert annual rate to decimal
  let r = annualRate / 100;

  // Periodic rate
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
  const formatteddays = formatDays(Math.ceil(days));
  console.log("TVM in helper", FV, PV, PMT, frequency, annualRate, years, days);

  return { days: days, label: formatteddays };
};

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

export const portfoliocalculation=(data)=>{
  // Step 1: Calculate allocated value
const withAllocated = data.map(item => ({
    ...item,
    allocated_value: item.portfolio_value * item.AllocationPercentage / 100
}));
console.log("Portfolio with Allocated",withAllocated);

// Step 2: Group and sum by AssetClassID
const groupedByAssetClass = withAllocated.reduce((acc, item) => {
    if (!acc[item.AssetClassID]) {
        acc[item.AssetClassID] = {
            AssetClassID: item.AssetClassID,
            AssetClassName: item.AssetClassName,
            total_allocated_value: 0
        };
    }
    acc[item.AssetClassID].total_allocated_value += item.allocated_value;
    console.log("Portfolio  Grouped",acc);
    return acc;
}, {});
return groupedByAssetClass;

}
export const totalInvestment=(data)=>{
  console.log("Data in total Investment",data);
const seen = new Set();
let totalInvested = 0;
let portfolio_value=0;
let portfoliocount=0;

for (const entry of data) {
  if (!seen.has(entry.portfolio_id)) {
    totalInvested += entry.invested_amount;
    portfolio_value+= entry.portfolio_value;
    portfoliocount++;
    seen.add(entry.portfolio_id);
  }
}
const profit=portfolio_value-totalInvested;
return {invested:totalInvested,investmentValue:portfolio_value, profit:profit,investmentcount:portfoliocount}
console.log("Total invested amount (unique portfolios):", totalInvested,portfolio_value,portfoliocount);


}



 export const  goalgroup=(data) =>{
const grouped = data.reduce((acc, item) => {
  const {
    goalId,
    goalName,
    goalTarget,
    goalDuration,
     status,
    fundingStatus,
    portfolio_id,
    creation_date,
    invested_amount,
    portfolio_value,
    valuation_date,
    AssetClassID,
    AssetClassName,
    AllocationPercentage
  } = item;

  if (!acc[goalId]) {
    acc[goalId] = {
      goalId,
      goalName,
      goalTarget,
      goalDuration,
     status,
    fundingStatus,
      portfolio: portfolio_id ? {
        portfolio_id,
        creation_date,
        invested_amount,
        portfolio_value,
        valuation_date,
        allocations: []
      } : null
    };
  }

  if (portfolio_id && AssetClassID !== null) {
    acc[goalId].portfolio.allocations.push({
      AssetClassID,
      AssetClassName,
      AllocationPercentage
    });
  }

  return acc;
}, {});

// Convert the result to an array
const result = Object.values(grouped);

console.log("Grouped Goal in Heler",result);
return result;

}


//--group transform

export const goalstransform=(data)=>{

console.log("before transform",data);
const summary = Object.values(
  data.reduce((acc, item) => {
    const { goalId, goalName, invested_amount, AssetClassName, AllocationPercentage,status,fundingStatus,goalTarget } = item;
    if (invested_amount === null || AssetClassName === null || AllocationPercentage === null) {
    //  return acc; // skip incomplete data
    }

    if (!acc[goalId]) {
      acc[goalId] = {
        goalId,
        goalName,
        goalTarget,
        status,
        fundingStatus,
        total_InvestedAmount: 0,
        chartAllocation: []
      };
    }

    const value = invested_amount * AllocationPercentage / 100;
    acc[goalId].total_InvestedAmount += invested_amount;

    // check if asset class already added
    const existing = acc[goalId].chartAllocation.find(a => a.title === AssetClassName);
    if (existing) {
      existing.value += value;
    } else {
      acc[goalId].chartAllocation.push({ title: AssetClassName, value });
    }

    return acc;
  }, {})
);
//JSON.stringify(summary, null, 2)
console.log("transformedGoal",summary);
return summary;
}








const allRiskProfiles = [
  {
    "RiskProfileID": 3,
    "Upper_Bound": 10,
    "Lower_Bound": 39,
    "RiskProfileName": "Cautious Turtle",
    "riskLevel": 1,
    "description": "A highly conservative investor who prioritizes capital preservation over growth. Prefers low-risk investments with stable returns, such as government bonds or fixed deposits."
  },
  {
    "RiskProfileID": 4,
    "Upper_Bound": 40,
    "Lower_Bound": 49,
    "RiskProfileName": "Steady Sailor",
    "riskLevel": 2,
    "description": "A moderately conservative profile focused on steady, reliable income. Comfortable with a small portion of investments in equities while keeping most assets in low-risk vehicles."
  },
  {
    "RiskProfileID": 6,
    "Upper_Bound": 50,
    "Lower_Bound": 59,
    "RiskProfileName": "Bold Explorer",
    "riskLevel": 3,
    "description": "A balanced risk-taker who seeks moderate growth. Willing to accept short-term volatility for long-term gains, typically investing in a diversified mix of bonds and equities."
  },
  {
    "RiskProfileID": 7,
    "Upper_Bound": 60,
    "Lower_Bound": 69,
    "RiskProfileName": "Fearless Falcon",
    "riskLevel": 4,
    "description": "A growth-oriented investor ready to take calculated risks. Comfortable with market fluctuations and invests heavily in equities for higher potential returns."
  },
  {
    "RiskProfileID": 8,
    "Upper_Bound": 70,
    "Lower_Bound": 79,
    "RiskProfileName": "Strategic Fox",
    "riskLevel": 5,
    "description": "A tactical investor with a sharp eye for opportunities. Actively manages risk while pursuing aggressive growth, often investing in dynamic markets and sectors."
  },
  {
    "RiskProfileID": 9,
    "Upper_Bound": 80,
    "Lower_Bound": 100,
    "RiskProfileName": "Daring Dragon",
    "riskLevel": 6,
    "description": "An aggressive and adventurous investor who embraces high risk for maximum reward. Invests predominantly in volatile assets like emerging markets, tech stocks, or cryptocurrencies."
  }
];

