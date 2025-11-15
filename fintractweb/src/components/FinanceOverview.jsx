import { addThousandsSeparator } from "../util/util";
import CustomPieChart from "./CustomPieChart";

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  const COLORS = ["#4ade80", "#f87171", "#60a5fa"];  

  const balanceData = [
    { name: "Income", value: totalIncome },
    { name: "Expense", value: totalExpense },
    { name: "Balance", value: totalBalance },
  ];

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-semibold">Financial Overview</h5>
      </div>
      <CustomPieChart
        data={balanceData}
        label="Total Balance"
        totalAmount={`₹${addThousandsSeparator(totalBalance)}`}
        colors={COLORS}
        showTextAnchar={true}
      />
    </div>
  );
};

export default FinanceOverview;



// import { addThousandsSeparator } from "../util/util";
// import CustomPieChart from "./CustomPieChart";

// const FinanceOverview = ({totalBalance,totalIncome,totalExpense}) => {

//      const COLORS = ["#4ade80", "#f87171", "#60a5fa"];  

//     return(
//        <div className="card">
//         <div className="flex items-center justify-between">
//             <h5 className="text-lg">Financial Overview</h5>
//         </div>
//         <CustomPieChart
//              data={balanceData}
//              label="Total Balance"
//              totalAmount={`₹${addThousandsSeparator(totalBalance)}`}
//              colors={COLORS}
//              showTextAnchar
             
//         />
//        </div>
//     )
// }

// export default FinanceOverview;