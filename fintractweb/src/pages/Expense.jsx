import { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";
import Home from "./Home";
import axiosConfig from "../util/axiosConfig";
import { API_ENDPOINTS } from "../util/apiEndpoints";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IncomeList from "../components/IncomeList";
import Modal from "../components/Modal";
import { Plus } from "lucide-react";

import AddIncomeForm from "../components/AddIncomeForm";
import DeleteAlert from "../components/DeleteAlert";
import IncomeOverView from "../components/IncomeOverView";
import ExpenseOverview from "../components/ExpenseOverView";
import ExpenseList from "../components/ExpenseList";
import AddExpenseForm from "../components/AddExpenseForm";


const Expense = () => {

    useUser();
    const [expenseData, setExpenseData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false);
    const [openDeleteAlert, setOpenDeleteAlert] = useState({
        show: false,
        data: null,
    });

    //fetch expense details from the API
    const fetchExpenseDetails = async () => {
        if (loading) return;

        setLoading(true);

        try {
            const response = await axiosConfig.get(API_ENDPOINTS.GET_ALL_EXPENSE);
            if (response.status === 200) {
                setExpenseData(response.data);

            }
        } catch (error) {
            console.error("failed to fetch expense details.", error);
            toast.error(error.response?.data?.message || "Failed to fetch expense Details.");
        } finally {
            setLoading(false);
        }
    }

    //fetch category for Expense

    const fetchExpenseCategory = async () => {
        try {
            const response = await axiosConfig.get(API_ENDPOINTS.CATEGORY_BY_TYPE("expense"));
            if (response.status === 200) {
                console.log('expense categories', response.data);
                setCategories(response.data);
            }
        } catch (error) {
            console.log('Failed to fetch expense category ', error);
            toast.error(error.data?.message || 'Failed to fetch expense categories for this category.')
        }
    }


    //save the expense details

    const handleAddExpense = async (expense) => {
        const { name, amount, icon, categoryId, date } = expense;  // ✅ fix here

        // validation
        if (!name.trim()) {
            toast.error("Please enter the name");
            return;
        }

        if (!amount || isNaN(amount) || Number(amount) <= 0) {
            toast.error("Amount should be Number");
            return;
        }

        if (!date) {
            toast.error("Date is required");
            return;
        }

        const today = new Date().toISOString().split('T')[0];
        if (date > today) {
            toast.error('Date can not be in the future');
            return;
        }

        if (!categoryId) {
            toast.error("Please select the category");
            return;
        }

        try {
            const response = await axiosConfig.post(API_ENDPOINTS.ADD_EXPENSE, {
                name,
                amount: Number(amount),
                date,
                icon,
                categoryId
            });

            if (response.status === 201) {
                setOpenAddExpenseModal(false);
                toast.success('Expense Added.');
                fetchExpenseDetails();
                fetchExpenseCategory();
            }

        } catch (error) {
            console.log('Error adding expense', error);
            toast.error(error.response?.data?.message || 'Failed Adding Expense !')
        }
    }


    //delete expense
    const deleteExpense = async (id) => {


        try {
            await axiosConfig.delete(API_ENDPOINTS.DELETE_EXPENSE(id));
            setOpenDeleteAlert({ show: false, data: null });
            toast.success("Expense Deleted.");
            fetchExpenseDetails();
        } catch (error) {
            console.log("Error deleting expense", error);
            toast.error(error.response?.data?.message || 'Failed to Delete Expense!');
        }
    }


    const handleDownloadExpenseDetails = async () => {
        
        try {
            const response = await axiosConfig.get(API_ENDPOINTS.EXPENSE_EXCEL_DOWNLOAD, { responseType: "blob" });
            let filename = "Expense-Details.xlsx";

            // Use response.data directly, no need to wrap in new Blob
            const url = window.URL.createObjectURL(response.data);

            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", filename);
            document.body.appendChild(link);
            link.click();
            link.remove(); // simpler than parentNode.removeChild

            window.URL.revokeObjectURL(url);
            toast.success('Expense Details Downloaded.');
        } catch (error) {
            console.log('Failed to Download !', error);
            toast.error(error.response?.data?.message || "Failed to Download !");
        }
    };

    const handleEmailExpenseDetails = async () => {
       
        try {
            const response = await axiosConfig.get(API_ENDPOINTS.EMAIL_EXPENSE);
            if (response.status === 200) {
                toast.success('Email Send.')
            }
        } catch (error) {
            console.log('Failed to send !', error);
            toast.error(error.response?.data?.message || "Failed to Send!");
        }
    }


    useEffect(() => {
        fetchExpenseDetails();
        fetchExpenseCategory();

    }, []);

    return (
        <div>
            <Dashboard activeMenu={"Expense"}>
                <div className="my-5 mx-auto">
                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            {/* overview for expense with line chart */}
                            <ExpenseOverview transactions={expenseData} onAddExpense={() => setOpenAddExpenseModal(true)} />

                        </div>
                        <ExpenseList
                            transactions={expenseData}
                            onDelete={(id) => setOpenDeleteAlert({ show: true, data: id })}
                            onDownload={handleDownloadExpenseDetails}
                            onEmail={handleEmailExpenseDetails}

                        />
                        {/* Add expense modal */}
                        <Modal
                            isOpen={openAddExpenseModal}
                            onClose={() => setOpenAddExpenseModal(false)}
                            title="Add Expense"
                        >
                            <AddExpenseForm
                                onAddExpense={(expense) => handleAddExpense(expense)}
                                categories={categories}
                            />
                        </Modal>

                        {/* Delete expense modal */}

                        <Modal
                            isOpen={openDeleteAlert.show}
                            onClose={() => setOpenDeleteAlert({ show: false, data: null })}
                            title="Delete Expense"
                        >
                            <DeleteAlert
                                content="Are you sure you want to delete this?"
                                onDelete={() => deleteExpense(openDeleteAlert.data)}
                            />
                        </Modal>


                    </div>
                </div>
            </Dashboard>
        </div>
    );
}

export default Expense;