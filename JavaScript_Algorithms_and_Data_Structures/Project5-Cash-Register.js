function checkCashRegister(price, cash, cid) {
  // Copy of cid
  let copyCid = [...cid].reverse();

  // Value of each unit
  const currencyUnit = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ];

  // Variables to store change, difference. Also, variable to store last state of money of the cash register
  let change = [];
  let difference = cash - price;
  let currentMoney = 0;

  // Function to round to two float numbers.
  function roundTwo(num) {
    return Math.round(num * 100) / 100;
  }

  // Iterate over copyCid and copy the value of the i element to the change variable on each turn.
  // Then modify the value of each new value of the subarray to 0;
  copyCid = copyCid.map((a, i) => {
    change[i] = copyCid[i].slice();
    change[i][1] = 0;
    // As long as there is money from the current currency, and while there is still a difference,
    // and as long as the current currency is less than the difference, keep this loop over the current copyCid element.
    while (a[1] > 0.0 && difference > 0.0 && currencyUnit[i][1] <= difference) {
      // Removes one unit from the current currency amount.
      a[1] = roundTwo(a[1] - currencyUnit[i][1]);
      // Subtract the amount of the coin from the difference.
      difference = roundTwo(difference - currencyUnit[i][1]);
      // Add that value to the current element of the change variable.
      change[i][1] = roundTwo(change[i][1] + currencyUnit[i][1]);
    }
    // At the end of the loop, add the ending value of the current currency to currentMoney.
    currentMoney = roundTwo(currentMoney + a[1]);
    // Finally, it returns the final value as the new value for the final amount of the current coin.
    return a;
  });

  // Object to be returned. Its default properties are set in the unfunded state, to return the first case.
  let result = {
    status: "INSUFFICIENT_FUNDS",
    change: [],
  };

  // If there are insufficient funds just return result.
  if (difference != 0) {
    return result;
    // If enough change can be returned, but funds are exhausted, then change the
    // status property to "CLOSE" and assign copy the change array to the property
  } else if (difference == 0 && copyCid.every((a) => a[1] == 0) == true) {
    result.status = "CLOSED";
    result.change = change.reverse();
    return result;
    //If there are sufficient funds to return the change and there is also cash left in the register,
    // then change the status property to "OPEN" and copy the filtered change array with the subarrays that
    // have a value other than 0.00 and assign this to the array property.Then it returns result.
  } else {
    result.status = "OPEN";
    result.change = change.filter((a) => a[1] != 0);
    return result;
  }
}

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
