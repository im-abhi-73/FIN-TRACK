import { HandCoins, IndianRupee, WalletCards } from "lucide-react";
import Dashboard from "../components/Dashboard";
import InfoCard from "../components/InfoCard";
import { useUser } from "../hooks/useUser";
import { addThousandsSeparator } from "../util/util.js";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosConfig from "../util/axiosConfig.jsx";
import { API_ENDPOINTS } from "../util/apiEndpoints.js";
import toast from "daisyui/components/toast/index.js";
import RecentTransactions from "../components/RecentTransactions.jsx";
import FinanceOverview from "../components/FinanceOverview.jsx";
import Transactions from "../components/Transactions.jsx";

const Home = () => {
  useUser();

  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    if (loading) return;

    setLoading(true);
    try {
      const response = await axiosConfig.get(API_ENDPOINTS.DASHBOARD_DATA);
      if (response.status === 200) {
        setDashboardData(response.data);
      }
    } catch (error) {
      console.error("Something went wrong while fetching dashboard data!", error);
      toast.error("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
    return () => {};
  }, []);

  return (
    <Dashboard activeMenu={"Dashboard"}>
      <div className="my-8 mx-auto max-w-[1400px] px-4">
        {/* Top Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard
            icon={<IndianRupee />}
            label="Total Balance"
            value={`${addThousandsSeparator(dashboardData?.totalBalance || 0)}`}
            color="bg-blue-600"
          />
          <InfoCard
            icon={<WalletCards />}
            label="Total Income"
            value={`${addThousandsSeparator(dashboardData?.totalIncome || 0)}`}
            color="bg-green-600"
          />
          <InfoCard
            icon={<HandCoins />}
            label="Total Expense"
            value={`${addThousandsSeparator(dashboardData?.totalExpenses || 0)}`}
            color="bg-red-600"
          />
        </div>

        {/* Lower Section: Recent Transactions + Finance Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Recent Transactions */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <RecentTransactions
              transaction={dashboardData?.recentTransaction}
              onMore={() => navigate("/expense")}
            />
          </div>

          {/* Finance Overview Chart */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <FinanceOverview
              totalBalance={dashboardData?.totalBalance || 0}
              totalIncome={dashboardData?.totalIncome || 0}
              totalExpense={dashboardData?.totalExpenses || 0}
            />
          </div>
        </div>
      </div>

      {/* 🌟 UNIQUE PREMIUM FOOTER ADDED BELOW */}
      <footer className="mt-10 bg-gradient-to-r bg-gray-50 text-gray-900 py-6 border-t border-gray-300">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <h3 className="text-lg font-semibold tracking-wide">
            Finance Tracker Dashboard
          </h3>

          <p className="text-sm opacity-80 mt-1">
            Smart • Secure • Fast • Made for Better Money Management
          </p>

          <div className="mt-3 flex justify-center gap-6 text-sm opacity-90">
            <span>📊 Dashboard</span>
            <span>💰 Income</span>
            <span>🧾 Expenses</span>
            
          </div>

          <p className="text-xs opacity-70 mt-4">
            © {new Date().getFullYear()} FinTrack • All Rights Reserved
          </p>
        </div>
      </footer>
    </Dashboard>
  );
};

export default Home;


// import { WalletCards } from "lucide-react";
// import Dashboar from "../components/Dashboard";
// import InfoCard from "../components/InfoCard";
// import { useUser } from "../hooks/useUser";
// import { addThousandsSeparator } from "../util/util.js"
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axiosConfig from "../util/axiosConfig.jsx";
// import { API_ENDPOINTS } from "../util/apiEndpoints.js";
// import toast from "daisyui/components/toast/index.js";
// import RecentTransactions from "../components/RecentTransactions.jsx";
// import FinanceOverview from "../components/FinanceOverview.jsx";


// const Home = () => {

//      useUser();

//      const navigate = useNavigate();
//      const [dashboardData,setDashboardData] = useState(null);
//      const [loading,setLoading] = useState(false);

//      const fetchDashboardData = async() => {
//            if(loading) return;

//            setLoading(true);

//            try {
//                 const response = await axiosConfig.get(API_ENDPOINTS.DASHBOARD_DATA);
//                 if(response.status === 200){
//                     setDashboardData(response.data);

//                 }
//            } catch (error) {
//                console.error("Something went wrong while fetching dashboard data ! plz tray again.",error);
//                toast.error('Something went wrong ! Please try again.');
          
//             }finally{
//                  setLoading(false);
//            }
//      }


//      useEffect(() => {
//         fetchDashboardData();
//         return()=>{};
//      },[]);


//     return (
//         <div>

//             <Dashboar activeMenu={"Dashboard"}>
//                 <div className="my-5 mx-auto">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
//                         {/*Display the cards*/}
//                         <InfoCard
//                                   icon={<WalletCards/>}
//                                   label="Total Balance"
//                                   value={addThousandsSeparator(dashboardData?.totalBalance || 0)}
//                                   color="bg-blue-800"
//                         />
//                          <InfoCard
//                                   icon={<WalletCards/>}
//                                   label="Total Income"
//                                   value={addThousandsSeparator(dashboardData?.totalIncome || 0)}
//                                   color="bg-green-800"
//                         />
//                          <InfoCard
//                                   icon={<WalletCards/>}
//                                   label="Total Expense"
//                                   value={addThousandsSeparator(dashboardData?.totalExpenses || 0)}
//                                   color="bg-red-800"
//                         />

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//                             {/* Recent Transactions */}
                            
//                             <RecentTransactions
//                                   transaction={dashboardData?.recentTransaction}
//                                   onMore={() => navigate("/expense")}
//                             />


//                             {/* Finace OverView Chart*/}
//                               <FinanceOverview
//                                    totalBalance={dashboardData?.totalBalance || 0}
//                                    totalIncome={dashboardData?.totalIncome || 0}
//                                    totalExpense={dashboardData?.totalExpenses || 0}
//                               />


//                             {/* Expense Transactions */}




//                             {/* Income Transactions */}

//                         </div>
//                     </div>
//                 </div>
//             </Dashboar>

//         </div>
//     );
// }

// export default Home;