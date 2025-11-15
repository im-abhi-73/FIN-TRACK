import { useEffect, useState } from "react";
import { prepareExpenseLineChartData } from "../util/prepareExpenseLineChartData";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from "recharts";
import { Plus } from "lucide-react";

const ExpenseOverview = ({ transactions, onAddExpense }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const result = prepareExpenseLineChartData(transactions);
        setChartData(result);
    }, [transactions]);

    return (
        <div className="card p-4 rounded-2xl shadow bg-white w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                    <h5 className="text-lg font-semibold">Expense Overview</h5>
                    <p className="text-xs text-gray-400 mt-1">
                        Control Your Earnings, Master Your Wealth
                    </p>
                </div>

                <button className="px-3 py-1 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 flex items-center gap-1 cursor-pointer"
                    onClick={onAddExpense}>
                    <Plus size={15} className="text-lg" />Add Expense
                </button>
            </div>

            <div className="mt-6 w-full h-64 sm:h-72 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
                        <XAxis dataKey="day" className="text-xs" />
                        <YAxis className="text-xs" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "white",
                                borderRadius: "8px",
                                border: "1px solid #e5e7eb",
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="expense"
                            //stroke="#4CAF50"   green
                            stroke="#FF0000"

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

export default ExpenseOverview;




