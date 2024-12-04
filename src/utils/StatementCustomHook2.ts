import { useQuery } from "react-query";

interface Customer {
  name: string;
  age: number;
  isIndian: boolean;
}

async function fetchCustomerData(customer: Customer | null) {
  if (!customer) return null;

  // Simulating an API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mocking API response
  return {
    ...customer,
    statement: `Statement for ${customer.name}`,
    balance: Math.floor(Math.random() * 10000),
  };
}

export function useCustomerData(customer: Customer | null) {
  return useQuery({
    queryKey: ["customerData", customer?.name],
    queryFn: () => fetchCustomerData(customer),
    enabled: !!customer,
  });
}
