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
    <div style={{ padding: "20px", maxWidth: "400px", fontFamily: "Arial" }}>
      <h3>New Transfer</h3>
      <label htmlFor="accountDropdown" style={{ fontWeight: "bold" }}>
        From:
      </label>
      <select
        id="accountDropdown"
        value={accounts.indexOf(selectedAccount)}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          marginTop: "10px",
        }}
      >
        {accounts.map((account, index) => (
          <option key={index} value={index}>
            {account.name} - {account.accountNumber}
          </option>
        ))}
      </select>
      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <strong>Selected Account:</strong>
        <p>{selectedAccount.name}</p>
        <p>{selectedAccount.accountNumber}</p>
        <p>Balance: {selectedAccount.balance.toLocaleString("en-GB")} GBP</p>
      </div>
    </div>
  );
};

export default Transfer;
