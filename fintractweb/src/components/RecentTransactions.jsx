import { ArrowRight, Ellipsis, MoveRight, SquareArrowDownLeft, SquareArrowDownRightIcon, SquareArrowLeft, SquareArrowOutDownRightIcon } from "lucide-react";
import TransactionInfoCard from "./TransactionInfoCard";
import moment from "moment";

const RecentTransactions = ({ transaction, onMore }) => {
  return (
    <div className="card p-4 shadow rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold">Recent Transactions</h4>

        <button
          onClick={onMore}
          className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
        >
          More <MoveRight size={15} />
        </button>
      </div>

      {/* Transaction List */}
      <div className="mt-6 space-y-3">
        {transaction?.slice(0, 5)?.map((item) => (
          <TransactionInfoCard
            key={item.id}
            title={item.name}
            icon={item.icon}
            date={moment(item.date).format("Do MMM YYYY")}
            amount={item.amount}
            type={item.type}
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;



// import { ArrowRight } from "lucide-react";
// import TransactionInfoCard from "./TransactionInfoCard"
// import moment from "moment";

// const RecentTransactions = ({transaction,onMore}) => {
    
//     return(
//              <div className="card">
//                 <div className="flex items-center justify-between">
//                     <h4 className="text-lg">Resent Transactions</h4>

//                     <button className="card-btn" onClick={onMore}>
//                         More <ArrowRight className="text-base" size={15}/>
//                     </button>
//                 </div>

//                <div className="mt-6">
//                    {transaction?.slice(0,5)?.map(item => (
//                     <TransactionInfoCard
//                             key={item.id}
//                             title={item.name}
//                             icon={item.icon}
//                             date={moment(item.date).format("Do MMM YYYY")}
//                             amount={item.amount}
//                             type={item.type}
//                             hideDeleteBtn
//                     />
//                    ))}; 
//                </div>

//              </div>
//     )
// }

// export default RecentTransactions;