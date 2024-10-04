import React from "react";
import balancesHUB from "../../assets/mockdata/amount.json";
import { showFormattedAmount } from "../../utils/displayFormattedAmount";

const Statements = () => {
  return (
    <div>
      <h2>Statements</h2>
      <div>
        Account Balance Page -: Total Amount Version One:
        <span>{showFormattedAmount(balancesHUB.balance.amount)}</span>{" "}
        <span>{balancesHUB.balance.currency}</span>
      </div>
    </div>
  );
};

export default Statements;
