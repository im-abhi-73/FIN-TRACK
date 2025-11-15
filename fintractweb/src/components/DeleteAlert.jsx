import { LoaderCircle } from "lucide-react";
import { useState } from "react";

const DeleteAlert = ({content,onDelete}) => {
const [loading,setLoading] = useState(false);
const handleDelete = async()=>{
    setLoading(true);
    try {
         await onDelete();
    } finally{
        setLoading(false);
    }
}

    return(
        <div>
            <p className="text-sm">{content}</p>
            <div className="flex justify-end mt-6">
                <button
                      onClick={handleDelete}
                      type="button"
                      disabled={loading}
                      className="add-btn add-btn-fill">
                      { loading ? (
                        <>
                           <LoaderCircle className="animate-spin w-4 h-4"/>Deleting..
                        </>
                      ) : (
                             <>Delete</> 
                      )};
                    </button>
            </div>
        </div>
    )
}

export default DeleteAlert;