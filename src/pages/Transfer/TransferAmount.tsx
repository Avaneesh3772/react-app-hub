import React, { useState } from "react";

type Account = {
  name: string;
  accountNumber: string;
  balance: number;
};

const accounts = [
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

const TransferAmount: React.FC = () => {
  const [selectedAccount, setSelectedAccount] = useState<Account>(accounts[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelect = (account: Account) => {
    setSelectedAccount(account);
    setIsDropdownOpen(false); // Close the dropdown after selecting
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        fontFamily: "Arial",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        position: "relative",
      }}
    >
      <h3 style={{ margin: 0 }}>New Transfer</h3>
      <div style={{ marginBottom: "10px" }}>From:</div>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          background: "#fff",
          cursor: "pointer",
        }}
        onClick={toggleDropdown}
      >
        {/* Selected Account Display */}
        <div style={{ padding: "10px" }}>
          <div>
            <strong>{selectedAccount.name}</strong>
          </div>
          <div style={{ fontSize: "12px", color: "#555" }}>
            {selectedAccount.accountNumber}
          </div>
          <div style={{ textAlign: "right", fontWeight: "bold" }}>
            {selectedAccount.balance.toLocaleString("en-GB", {
              style: "currency",
              currency: "GBP",
            })}
          </div>
        </div>
      </div>

      {/* Dropdown Options */}
      {isDropdownOpen && (
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "5px",
            maxHeight: "200px",
            overflowY: "auto",
            zIndex: 10,
          }}
        >
          {accounts.map((account, index) => (
            <li
              key={index}
              onClick={() => handleSelect(account)}
              style={{
                padding: "10px",
                borderBottom: "1px solid #eee",
                cursor: "pointer",
                background:
                  selectedAccount === account ? "#f0f8ff" : "transparent",
              }}
            >
              <div>
                <strong>{account.name}</strong>
              </div>
              <div style={{ fontSize: "12px", color: "#555" }}>
                {account.accountNumber}
              </div>
              <div style={{ textAlign: "right", fontWeight: "bold" }}>
                {account.balance.toLocaleString("en-GB", {
                  style: "currency",
                  currency: "GBP",
                })}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransferAmount;
