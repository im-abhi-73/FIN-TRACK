import { API_ENDPOINTS } from "./apiEndpoints";

const CLOUNDINARY_UPLOAD_PRESET = 'fintrack';

const uploadProfileImage = async (image) => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', CLOUNDINARY_UPLOAD_PRESET);

   
    try {
        const response = await fetch(API_ENDPOINTS.UPLOAD_IMAGE, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`${errorData.error.message ||response.statusText }, 'Image upload failed'`);
        }

        const data = await response.json();
        console.log("Image upload successful.", data);
        return data.secure_url; // return the uploaded image URL
           
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;

    }
}
export default uploadProfileImage;