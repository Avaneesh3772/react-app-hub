import React from "react";
import balancesHUB from "../../assets/mockdata/amount.json";
import { showFormattedAmount } from "../../utils/displayFormattedAmount";

const TryCatchAnotherWay = () => {
  return (
    <>
      <div>
        Try Catch Page -: Total Amount Version One:
        <span>{showFormattedAmount(balancesHUB.balance.amount)}</span>{" "}
        <span>{balancesHUB.balance.currency}</span>
      </div>
    </>
  );
};

export default TryCatchAnotherWay;
