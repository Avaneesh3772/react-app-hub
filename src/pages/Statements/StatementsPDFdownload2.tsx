"use client";

import { useState } from "react";
import { useCustomerData } from "../../utils/StatementCustomHook2";
import { Button } from "react-bootstrap";

interface Customer {
  name: string;
  age: number;
  isIndian: boolean;
}

const customers: Customer[] = [
  {
    name: "Avaneesh",
    age: 35,
    isIndian: true,
  },
  {
    name: "Mike",
    age: 22,
    isIndian: false,
  },
  {
    name: "Vivek",
    age: 29,
    isIndian: true,
  },
];

export default function Statement() {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );
  const { data, isLoading, error } = useCustomerData(selectedCustomer);

  const handleSubmit = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Customer Statements</h1>
      <div className="space-y-4">
        {customers.map((customer, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 border rounded"
          >
            <div>
              <p>
                <strong>Name:</strong> {customer.name}
              </p>
              <p>
                <strong>Age:</strong> {customer.age}
              </p>
              <p>
                <strong>Is Indian:</strong> {customer.isIndian ? "Yes" : "No"}
              </p>
            </div>
            <Button onClick={() => handleSubmit(customer)}>Submit</Button>
          </div>
        ))}
      </div>

      {selectedCustomer && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Selected Customer Data</h2>
          {isLoading && <p>Loading...</p>}

          {data && (
            <div>
              <p>
                <strong>API Response:</strong>
              </p>
              <pre className="bg-gray-100 p-2 rounded">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
