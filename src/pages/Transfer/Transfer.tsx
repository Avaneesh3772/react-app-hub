import React, { useState } from "react";

type Account = {
  name: string;
  accountNumber: string;
  balance: number;
};

const accounts: Account[] = [
  {
    name: "Executive Plus",
    accountNumber: "60-92-82 10000080",
    balance: 117795279.29,
  },
  {
    name: "High Interest Savings",
    accountNumber: "60-92-82 10000080",
    balance: 49568.0,
  },
  {
    name: "High Interest Savings (Bonus)",
    accountNumber: "60-92-82 10000080",
    balance: 1000000.0,
  },
  {
    name: "High Interest Savings",
    accountNumber: "60-92-82 10000080",
    balance: 4672245.0,
  },
  {
    name: "Executive Plus",
    accountNumber: "60-92-82 10000085",
    balance: 0.0,
  },
];

const Transfer: React.FC = () => {
  const [selectedAccount, setSelectedAccount] = useState<Account>(accounts[0]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = parseInt(event.target.value, 10);
    setSelectedAccount(accounts[selectedIndex]);
  };

  return (
    <div>
      <label htmlFor="account-select" style={{ marginRight: "8px" }}>
        Select Account:
      </label>
      <select
        id="account-select"
        value={accounts.indexOf(selectedAccount)}
        onChange={handleChange}
        style={{ padding: "8px", fontSize: "16px" }}
      >
        {accounts.map((account, index) => (
          <option key={index} value={index}>
            {`${account.name} | ${
              account.accountNumber
            } | Balance: $${account.balance.toLocaleString()}`}
          </option>
        ))}
      </select>
      <div style={{ marginTop: "16px" }}>
        <h3>Selected Account Details</h3>
        <p>
          <strong>Name:</strong> {selectedAccount.name}
        </p>
        <p>
          <strong>Account Number:</strong> {selectedAccount.accountNumber}
        </p>
        <p>
          <strong>Balance:</strong> ${selectedAccount.balance.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Transfer;
