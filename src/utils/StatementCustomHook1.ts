import axios from "axios";
import { useQuery } from "react-query";

type Customer = {
  name: string;
  age: number;
  isIndian: boolean;
};

// Custom hook to fetch data
export const useFetchCustomerData = (customer: Customer | null) => {
  return useQuery(
    ["customerData", customer], // Cache key includes customer info
    async () => {
      if (!customer) return null;

      // Replace with actual API call
      const { data } = await axios.get(`/api/customers/${customer.name}`);
      return data;
    },
    {
      enabled: !!customer, // Run query only when a customer is selected
      staleTime: 1000 * 60 * 5, // Set appropriate stale time
      retry: 2, // Optional retry logic
    }
  );
};
