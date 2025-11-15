import { useEffect, useState } from "react";
import { prepareExpenseLineChartData } from "../util/prepareExpenseLineChartData";
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,} from "recharts";

const ExpenseLineChart = ({ transactions }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseLineChartData(transactions);
    console.log("Day-wise chart data 👉", result);
    setChartData(result);
  }, [transactions]);

  return (
    <div className="w-full bg-white p-4 rounded-2xl shadow">
      <h2 className="text-lg font-semibold mb-4">Daily Expense Trend</h2>
      <div className="w-full h-64 sm:h-72 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="expense"
              stroke="#4CAF50"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseLineChart;
