import { Key, LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import Input from "./Input";
import EmojiPickerPopup from "./EmojiPickerPopup";

const AddCategoryForm = ({ onAddCategory, initialCategoryData, isEditing }) => {
  const [category, setCategory] = useState({
    name: "",
    type: "income",
    icon: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEditing && initialCategoryData) {
      setCategory(initialCategoryData);
    } else {
      // ✅ keep default type as "income" instead of ""
      setCategory({ name: "", type: "income", icon: "" });
    }
  }, [isEditing, initialCategoryData]);

  const categoryTypeOption = [
    { value: "income", label: "Income" },
    { value: "expense", label: "Expense" },
  ];

  /*const handleChange = (key, value) => {
    setCategory({ ...category, [key]: value });
  };*/

  const handleChange = (key, valueOrEvent) => {
  const value = valueOrEvent?.target ? valueOrEvent.target.value : valueOrEvent;
  setCategory((prev) => ({ ...prev, [key]: value }));
};


  const handleSubmit = async () => {
    setLoading(true);
    try {
      await onAddCategory(category);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <EmojiPickerPopup
        icon={category.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />

      <Input
        type="text"
        value={category.name}
        onChange={({ target }) => handleChange("name", target.value)}
        placeholder="e.g., Salary, Rent, Groceries"
        label="Category Name"
      />

      <Input
        label="Category Type"
        value={category.type}
       /* onChange={({ target }) => handleChange("type", target.value)} */
       onChange={(val) => handleChange("type", val)}
        isSelect={true}
        options={categoryTypeOption}
      />

      <div className="flex justify-end mt-6">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="add-btn add-btn-fill cursor-pointer flex items-center gap-2"
        >
          {loading ? (
            <>
              <LoaderCircle className="w-4 h-4 animate-spin" />
              {isEditing ? "Update" : "Add"}
            </>
          ) : (
            <>{isEditing ? "Update" : "Add"}</>
          )}
        </button>
      </div>
    </div>
  );
};

export default AddCategoryForm;




// import { Key, LoaderCircle } from "lucide-react";
// import { useEffect, useState } from "react";
// import Input from "./Input";
// import EmojiPickerPopup from "./EmojiPickerPopup";

// const AddCategoryForm = ({onAddCategory,initialCategoryData,isEditing}) => {
//   const [category, setCategory] = useState({
//     name: "",
//     type: "income",
//     icon: "",
//   });

//   const [loading,setLoading] = useState(false);


//   useEffect(() => {
//     if(isEditing && initialCategoryData){
//         setCategory(initialCategoryData);
//     }else{

//       setCategory({name :"",type : "",icon :""})
//     }
//   },[isEditing,initialCategoryData])

//   const categoryTypeOption = [
//     { value: "income", label: "Income" },
//     { value: "expense", label: "Expense" },
//   ];

//   const handleChange = (key, value) => {
//     setCategory({ ...category, [key]: value });
//   };

//   const handleSubmit =async () => {
//       setLoading(true);
//     try{
//          await onAddCategory(category);
//     }finally{
//       setLoading(false);
//     }
   
//   };



//   return (
//     <div className="p-4">

//       <EmojiPickerPopup 
//          icon={category.icon}
//          onSelect={(selectedIcon) => handleChange("icon",selectedIcon)}
//       />

//         <Input
//           type="text"
//           value={category.name}
//           onChange={({ target }) => handleChange("name", target.value)}
//           placeholder="e.g., Salary, Rent, Groceries"
//           label="Category Name"
//         />
       
//         <Input 
//            label="Category Type"
//            value={category.type}
//            onChange={({ target }) => handleChange("type", target.value)}
//            isSelect={true}
//            options={categoryTypeOption}
//           />

//           <div className="flex justify-end mt-6">
//             <button 
//               type="button"
//               onClick={handleSubmit}
//               disabled={loading}
//               className="add-btn add-btn-fill cursor-pointer">
//               {loading ? (
//                  <>
//                     <LoaderCircle className="w-4 h-4 animate-spin "/>
//                  {isEditing ? "Update" : "Add"}
//                  </>
//               ) : (
//                     <>
//                       {isEditing ? "Update" : "Add"}
//                     </>
//               ) }
//             </button>
//           </div>
       
//     </div>
//   );
// };

// export default AddCategoryForm;
