export const portfolio_Query = `SELECT up.portfolio_id, up.goal_id, up.creation_date, up.invested_amount, up.portfolio_value, up.valuation_date, ac.AssetClassID, ac.AssetClassName, pa.AllocationPercentage FROM UserPortfolio up JOIN UserGoal ug ON up.goal_id = ug.goalId JOIN Portfolio_Allocations pa ON up.allocationId = pa.TemplateID JOIN Asset_Classes ac ON pa.AssetClassID = ac.AssetClassID WHERE ug.userId = 1;`;



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