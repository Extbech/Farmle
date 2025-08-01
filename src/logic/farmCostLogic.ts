export const getTotalCost = (cost: number, amount: number, multiplier: number) => {
    let totalCost = cost;
    for (let i = 1; i < amount; i++) {
        totalCost += cost * Math.pow(multiplier, i);
    }
    return totalCost;
}