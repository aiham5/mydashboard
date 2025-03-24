import { Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { mockTransactions } from "../data/mockData"; // Import your transaction data

// Function to process transaction data
const processTransactionData = (transactions) => {
  const userData = {};

  transactions.forEach((transaction) => {
    const { user, cost } = transaction;

    // Convert cost to a number (remove the dollar sign if necessary)
    const revenue = parseFloat(cost);

    // Initialize user data if it doesn't exist
    if (!userData[user]) {
      userData[user] = { revenue: 0, transactions: 0 };
    }

    // Add revenue and increment transaction count
    userData[user].revenue += revenue;
    userData[user].transactions += 1;
  });

  // Convert the processed data into an array for the chart
  return Object.keys(userData).map((user) => ({
    name: user,
    revenue: userData[user].revenue,
    transactions: userData[user].transactions,
  }));
};

const Analytics = () => {
  // Process the transaction data
  const chartData = processTransactionData(mockTransactions);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Analytics
      </Typography>
      <Typography variant="body1" gutterBottom>
        Revenue and Transactions by User
      </Typography>

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#8884d8" name="Revenue" />
          <Bar dataKey="transactions" fill="#82ca9d" name="Transactions" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
