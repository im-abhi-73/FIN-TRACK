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

const Income = () => {

    useUser();
    const [incomeData, setIncomeData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);
    const [openDeleteAlert, setOpenDeleteAlert] = useState({
        show: false,
        data: null,
    });

    //fetch income details from the API
    const fetchIncomeDatails = async () => {
        if (loading) return;

        setLoading(true);

        try {
            const response = await axiosConfig.get(API_ENDPOINTS.GET_ALL_INCOME);
            if (response.status === 200) {
                setIncomeData(response.data);

            }
        } catch (error) {
            console.error("failed to fetch income details.", error);
            toast.error(error.response?.data?.message || "Failed to fetch incomes Details.");
        } finally {
            setLoading(false);
        }
    }

    //fetch category for Income

    const fetchIncomeCategory = async () => {
        try {
            const response = await axiosConfig.get(API_ENDPOINTS.CATEGORY_BY_TYPE("income"));
            if (response.status === 200) {
                console.log('income categories', response.data);
                setCategories(response.data);
            }
        } catch (error) {
            console.log('Failed to fetch income category ', error);
            toast.error(error.data?.message || 'Failed to fetch income categories for this category.')
        }
    }


    //save the income details

    const handleAddIncome = async (income) => {
        const { name, amount, icon, categoryId, date } = income;  // ✅ fix here

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
            const response = await axiosConfig.post(API_ENDPOINTS.ADD_INCOME, {
                name,
                amount: Number(amount),
                date,
                icon,
                categoryId
            });

            if (response.status === 201) {
                setOpenAddIncomeModal(false);
                toast.success('Income Added.');
                fetchIncomeDatails();
                fetchIncomeCategory();
            }

        } catch (error) {
            console.log('Error adding income', error);
            toast.error(error.response?.data?.message || 'Failed Adding Income !')
        }
    }


    //delete income
    const deleteIncome = async (id) => {


        try {
            await axiosConfig.delete(API_ENDPOINTS.DELETE_INCOME(id));
            setOpenDeleteAlert({ show: false, data: null });
            toast.success("Income Deleted.");
            fetchIncomeDatails();
        } catch (error) {
            console.log("Error deleting income", error);
            toast.error(error.response?.data?.message || 'Failed to Delete Income!');
        }
    }


    const handleDownloadIncomeDetails = async () => {
        
        try {
            const response = await axiosConfig.get(API_ENDPOINTS.INCOME_EXCEL_DOWNLOAD, { responseType: "blob" });
            let filename = "Income-Details.xlsx";

            // Use response.data directly, no need to wrap in new Blob
            const url = window.URL.createObjectURL(response.data);

            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", filename);
            document.body.appendChild(link);
            link.click();
            link.remove(); // simpler than parentNode.removeChild

            window.URL.revokeObjectURL(url);
            toast.success('Income Details Downloaded.');
        } catch (error) {
            console.log('Failed to Download !', error);
            toast.error(error.response?.data?.message || "Failed to Download !");
        }
    };

    const handleEmailIncomeDetails = async () => {
       
        try {
            const response = await axiosConfig.get(API_ENDPOINTS.EMAIL_INCOME);
            if (response.status === 200) {
                toast.success('Email Send.')
            }
        } catch (error) {
            console.log('Failed to send !', error);
            toast.error(error.response?.data?.message || "Failed to Send!");
        }
    }


    useEffect(() => {
        fetchIncomeDatails();
        fetchIncomeCategory();

    }, []);

    return (
        <div>
            <Dashboard activeMenu={"Income"}>
                <div className="my-5 mx-auto">
                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            {/* overview for income with line chart */}
                            <IncomeOverView transactions={incomeData} onAddIncome={() => setOpenAddIncomeModal(true)} />

                        </div>
                        <IncomeList
                            transactions={incomeData}
                            onDelete={(id) => setOpenDeleteAlert({ show: true, data: id })}
                            onDownload={handleDownloadIncomeDetails}
                            onEmail={handleEmailIncomeDetails}

                        />
                        {/* Add income modal */}
                        <Modal
                            isOpen={openAddIncomeModal}
                            onClose={() => setOpenAddIncomeModal(false)}
                            title="Add Income"
                        >
                            <AddIncomeForm
                                onAddIncome={(income) => handleAddIncome(income)}
                                categories={categories}
                            />
                        </Modal>

                        {/* Delete income modal */}

                        <Modal
                            isOpen={openDeleteAlert.show}
                            onClose={() => setOpenDeleteAlert({ show: false, data: null })}
                            title="Delete Income"
                        >
                            <DeleteAlert
                                content="Are you sure you want to delete this?"
                                onDelete={() => deleteIncome(openDeleteAlert.data)}
                            />
                        </Modal>


                    </div>
                </div>
            </Dashboard>
        </div>
    );
}

export default Income;