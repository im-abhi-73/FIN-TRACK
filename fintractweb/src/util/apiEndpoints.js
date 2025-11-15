 export const BASE_URL = 'http://localhost:8080/api/v1.0';

        const CLOUNDINARY_CLOUD_NAME = 'dpkobdjwi';


 export const API_ENDPOINTS = {
        LOGIN: '/login',
        REGISTER: '/register',
        GET_USER_INFO :'/profile',
        GET_ALL_CATEGORIES : '/category',
        ADD_CATEGORY : '/category',  
        UPDATE_CATEGORY : (categoryId) => `/category/${categoryId}` ,

        GET_ALL_INCOME : '/income',
        CATEGORY_BY_TYPE : (type) => `/category/${type}`,
        ADD_INCOME : '/income',
        DELETE_INCOME : (incomeID) => `/income/${incomeID}`,
        INCOME_EXCEL_DOWNLOAD : '/excel/dowload/income',
        EMAIL_INCOME : '/email/income-excel',

        GET_ALL_EXPENSE : '/expense',
        ADD_EXPENSE : '/expense',
        DELETE_EXPENSE : (expenseID) => `/expense/${expenseID}`,
        EXPENSE_EXCEL_DOWNLOAD : '/excel/dowload/expense',
        EMAIL_EXPENSE : '/email/expense-excel',

        APPLY_FILTER : '/filter',
        DASHBOARD_DATA : '/dashboard',

        UPLOAD_IMAGE: `https://api.cloudinary.com/v1_1/${CLOUNDINARY_CLOUD_NAME}/image/upload`
        
        // Add other endpoints as needed


 };

