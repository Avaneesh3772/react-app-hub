import React from "react";
import balancesHUB from "../../assets/mockdata/amount.json";
import { formatCurrencyGBP } from "../../utils/formatCurrencyGBP";

const Accounts = () => {
  const showFormattedAmount = (amount: number) => {
    try {
      return formatCurrencyGBP(amount);
    } catch (error) {
      return "INVALID AMOUNT TYPE"; // Display "N/A" if there's an error
    }
  };

  return (
    <>
      <div>
        Total Amount Version One:
        <span>{showFormattedAmount(balancesHUB.balance.amount)}</span>{" "}
        <span>{balancesHUB.balance.currency}</span>
      </div>
    </>
  );
};

export default Accounts;
