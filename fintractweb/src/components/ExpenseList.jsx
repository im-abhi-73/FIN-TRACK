import { Download, LoaderCircle, Mail } from "lucide-react";
import moment from "moment";
import { useState } from "react";
import TransactionInfoExpense from "./TransactionInfoExpense";

const ExpenseList = ({ transactions , onDelete , onDownload , onEmail }) => {

  const [loading,setLoading] = useState(false);
  const [loadingDownload, setLoadingDownload] = useState(false);

  const handleEmail = async() => {
    setLoading(true);
    try {
         await onEmail();
    } finally{
      setLoading(false);
    }
  }

const handleDownload = async () => {
  setLoadingDownload(true);
  try {
       await onDownload(); 
   } finally { 
    setLoadingDownload(false);
   }
};

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Expense Sources</h5>

        <div className="flex items-center justify-end gap-2">
          <button disabled={loading} className="px-3 py-1 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 flex items-center gap-1 cursor-pointer" onClick={handleEmail}>
            {loading ? (
              <>
              <LoaderCircle className="h-4 w-4 animate-spin"/>
                 Emailing..
              </>
            ) : (
              <>
                <Mail size={15} className="text-purple-900" /> Email
              </>
            )}
          </button>

          <button disabled={loading} className="px-3 py-1 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 flex items-center gap-1 cursor-pointer" onClick={handleDownload}>
            {loadingDownload ? (
             <>
              <LoaderCircle className="h-4 w-4 animate-spin"/>
              Downloading..
             </> 
            ) : (
              <>
                <Download size={15} className="text-purple-900 " /> Download
              </>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/*Display the expense.*/}
        {transactions?.map((expense) => (
            <TransactionInfoExpense
               key={expense.id}
               title={expense.name}
               icon={expense.icon}
               date={moment(expense.date).format('Do MMM YYYY')}
               amount={expense.amount}
               type="expense"
               onDelete ={()=> onDelete(expense.id) }
            />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
