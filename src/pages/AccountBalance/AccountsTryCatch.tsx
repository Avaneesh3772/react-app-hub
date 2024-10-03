import React, { useState, useEffect } from "react";
import balancesHUB from "../../assets/mockdata/amount.json";
import { formatCurrencyGBP } from "../../utils/formatCurrencyGBP";

const AccountsTryCatch = () => {
  const [formattedAmount, setFormattedAmount] = useState<string | null>(null);

  useEffect(() => {
    try {
      const formatted = formatCurrencyGBP(balancesHUB.balance.amount2);
      setFormattedAmount(formatted);
    } catch (error) {
      setFormattedAmount("Invalid Data Type");
    }
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Total Amount</h2>
      {formattedAmount}
    </div>
  );
};

export default AccountsTryCatch;
