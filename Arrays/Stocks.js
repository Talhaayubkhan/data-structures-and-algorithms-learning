// 🧭 Best Time to Buy and Sell Stocks
// Goal: Find the maximum profit possible by buying once and selling once

function maxProfit(prices) {
  // Initialize the first day's price as the minimum value (best buying point so far)
  let minValue = prices[0];

  // Initialize maximum profit as 0 (no transaction yet)
  let maxProfit = 0;

  //  Loop through prices starting from the second day
  for (let i = 1; i < prices.length; i++) {
    // 💰 Check: if selling today gives a better profit than before
    // (today's price - the cheapest price so far)
    if (prices[i] - minValue > maxProfit) {
      maxProfit = prices[i] - minValue; // update the best profit found
    }

    // 🧾 Check: if today's price is cheaper than any seen before
    // (so we can buy at a better price later)
    if (prices[i] < minValue) {
      minValue = prices[i]; // update the new minimum price
    }
  }

  // 🏁 Return the best profit found after checking all days
  return maxProfit;
}

// Example usage:
let prices = [7, 1, 5, 3, 6, 4];

// Output shows maximum possible profit (buy at 1, sell at 6)
console.log("Maximum Profit = " + maxProfit(prices)); // Output: 5
