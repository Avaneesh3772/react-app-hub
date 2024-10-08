import React from "react";
import balancesHUB from "../../assets/mockdata/amount.json";
import { formatCurrencyGBP } from "../../utils/formatCurrencyGBP";

const Accounts = () => {
  let formattedAmount;

  try {
    formattedAmount = formatCurrencyGBP(balancesHUB.balance.amount);
  } catch (error) {
    formattedAmount = "INVALID AMOUNT TYPE"; // Display "N/A" if there's an error
  }

  return (
    <>
      <div>
        Total Amount Version One:
        <span>{formattedAmount}</span>
        <span>{balancesHUB.balance.currency}</span>
      </div>
    </>
  );
};

export default Accounts;
