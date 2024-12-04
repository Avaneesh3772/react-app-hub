import React, { useState } from "react";
import { useFetchCustomerData } from "../../utils/StatementCustomHook1";

type Customer = {
  name: string;
  age: number;
  isIndian: boolean;
};

const customers: Customer[] = [
  { name: "Avaneesh", age: 35, isIndian: true },
  { name: "Mike", age: 22, isIndian: false },
  { name: "Vivek", age: 29, isIndian: true },
];

const Statement: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  const handleSubmit = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  const { data, isLoading, error } = useFetchCustomerData(selectedCustomer);

  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map((customer, index) => (
          <li key={index}>
            <span>
              {customer.name} - Age: {customer.age}
            </span>
            <button onClick={() => handleSubmit(customer)}>Submit</button>
          </li>
        ))}
      </ul>

      {selectedCustomer && (
        <div>
          <h3>Selected Customer: {selectedCustomer.name}</h3>

          {isLoading && <p>Loading data...</p>}
          {error && <p>Error:</p>}
          {data && (
            <div>
              <h4>Fetched Data:</h4>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Statement;
