export const portfolio_Query = `SELECT up.portfolio_id, up.goal_id, up.creation_date, up.invested_amount, up.portfolio_value, up.valuation_date, ac.AssetClassID, ac.AssetClassName, pa.AllocationPercentage FROM UserPortfolio up JOIN UserGoal ug ON up.goal_id = ug.goalId JOIN Portfolio_Allocations pa ON up.allocationId = pa.TemplateID JOIN Asset_Classes ac ON pa.AssetClassID = ac.AssetClassID WHERE ug.userId = 1;`;
export const goalsquery= `SELECT ug.goalId, ug.goalName, ug.goalTarget, ug.goalDuration,ug.status,ug.fundingStatus,
up.portfolio_id, up.creation_date, up.invested_amount, up.portfolio_value, up.valuation_date, ac.AssetClassID, ac.AssetClassName, pa.AllocationPercentage FROM UserGoal ug LEFT JOIN UserPortfolio up ON ug.goalId = up.goal_id LEFT JOIN Portfolio_Allocations pa ON up.allocationId = pa.TemplateID LEFT JOIN Asset_Classes ac ON pa.AssetClassID = ac.AssetClassID WHERE ug.userId = 1;`

export const sampleresponse= data =[
    {
        "goalId": 46,
        "goalName": "Electronics",
        "goalTarget": 111,
        "goalDuration": 1930,
        "portfolio_id": 1,
        "creation_date": "2024-01-15T00:00:00.000Z",
        "invested_amount": 10000,
        "portfolio_value": 10500,
        "valuation_date": "2024-06-15T00:00:00.000Z",
        "AssetClassID": 2,
        "AssetClassName": "ETF-Sovereign Bond",
        "AllocationPercentage": 60
    },
    {
        "goalId": 47,
        "goalName": "Wedding",
        "goalTarget": 110,
        "goalDuration": 3975,
        "portfolio_id": 2,
        "creation_date": "2024-02-01T00:00:00.000Z",
        "invested_amount": 5000,
        "portfolio_value": 5100,
        "valuation_date": "2024-06-15T00:00:00.000Z",
        "AssetClassID": 2,
        "AssetClassName": "ETF-Sovereign Bond",
        "AllocationPercentage": 60
    },
    {
        "goalId": 46,
        "goalName": "Electronics",
        "goalTarget": 111,
        "goalDuration": 1930,
        "portfolio_id": 1,
        "creation_date": "2024-01-15T00:00:00.000Z",
        "invested_amount": 10000,
        "portfolio_value": 10500,
        "valuation_date": "2024-06-15T00:00:00.000Z",
        "AssetClassID": 1,
        "AssetClassName": "ETF-Equities",
        "AllocationPercentage": 40
    },
    {
        "goalId": 47,
        "goalName": "Wedding",
        "goalTarget": 110,
        "goalDuration": 3975,
        "portfolio_id": 2,
        "creation_date": "2024-02-01T00:00:00.000Z",
        "invested_amount": 5000,
        "portfolio_value": 5100,
        "valuation_date": "2024-06-15T00:00:00.000Z",
        "AssetClassID": 1,
        "AssetClassName": "ETF-Equities",
        "AllocationPercentage": 40
    },
    {
        "goalId": 56,
        "goalName": "Car",
        "goalTarget": 111,
        "goalDuration": -1693,
        "portfolio_id": null,
        "creation_date": null,
        "invested_amount": null,
        "portfolio_value": null,
        "valuation_date": null,
        "AssetClassID": null,
        "AssetClassName": null,
        "AllocationPercentage": null
    },
    {
        "goalId": 57,
        "goalName": "Furniture",
        "goalTarget": 1000,
        "goalDuration": 3979,
        "portfolio_id": null,
        "creation_date": null,
        "invested_amount": null,
        "portfolio_value": null,
        "valuation_date": null,
        "AssetClassID": null,
        "AssetClassName": null,
        "AllocationPercentage": null
    }
]


/*
[
    {
        "portfolio_id": 1,
        "goal_id": 46,
        "creation_date": "2024-01-15T00:00:00.000Z",
        "invested_amount": 10000,
        "portfolio_value": 10500,
        "valuation_date": "2024-06-15T00:00:00.000Z",
        "AssetClassID": 2,
        "AssetClassName": "ETF-Sovereign Bond",
        "AllocationPercentage": 60
    },
    {
        "portfolio_id": 1,
        "goal_id": 46,
        "creation_date": "2024-01-15T00:00:00.000Z",
        "invested_amount": 10000,
        "portfolio_value": 10500,
        "valuation_date": "2024-06-15T00:00:00.000Z",
        "AssetClassID": 1,
        "AssetClassName": "ETF-Equities",
        "AllocationPercentage": 40
    },
    {
        "portfolio_id": 2,
        "goal_id": 47,
        "creation_date": "2024-02-01T00:00:00.000Z",
        "invested_amount": 5000,
        "portfolio_value": 5100,
        "valuation_date": "2024-06-15T00:00:00.000Z",
        "AssetClassID": 2,
        "AssetClassName": "ETF-Sovereign Bond",
        "AllocationPercentage": 60
    },
    {
        "portfolio_id": 2,
        "goal_id": 47,
        "creation_date": "2024-02-01T00:00:00.000Z",
        "invested_amount": 5000,
        "portfolio_value": 5100,
        "valuation_date": "2024-06-15T00:00:00.000Z",
        "AssetClassID": 1,
        "AssetClassName": "ETF-Equities",
        "AllocationPercentage": 40
    }
]
*/