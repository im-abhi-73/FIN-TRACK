import { Image, X } from "lucide-react";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react"; // install: npm install emoji-picker-react

const EmojiPickerPopup = ({ icon, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-start gap-5 mb-6">
      {/* Trigger Button */}
      <div
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-4 cursor-pointer"
      >
        <div className="w-12 h-12 flex items-center justify-center text-2xl bg-blue-50 text-blue-500 rounded-lg">
          {icon ? (
            <img src={icon} alt="Icon" className="w-12 h-12" />
          ) : (
            <Image />
          )}
        </div>
        <p>{icon ? "Change Icon" : "Pick Icon"}</p>
      </div>

      {/* Emoji Picker Popup */}
      {isOpen && (
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="w-7 h-7 flex items-center justify-center bg-white border border-gray-200 rounded-full absolute -top-2 -right-2 z-10 cursor-pointer"
          >
            <X />
          </button>

          {/* Emoji Picker */}
          <EmojiPicker
            onEmojiClick={(emojiData) => {
              onSelect(emojiData.imageUrl || emojiData.emoji); 
              setIsOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default EmojiPickerPopup;
 








// import { Image, X } from "lucide-react";
// import { useState } from "react";

// const EmojiPickerPopup = ({icon,onSelect}) => {

// const [isOpen,setIsOpen] = useState(false);


//     return(
//               <div className="flex flex-col md:flex-row items-start gap-5 mb-6">
//                 <div 
//                     onClick={() => setIsOpen(true)}
//                     className="flex items-center gap-4 cursor-pointer">
//                         <div className="w-12 h-12 flex items-center justify-center text-2xl bg-blue-50 text-blue-500 rounded-lg">
//                             {icon ? (
//                                 <img src={icon} alt="Icon" className="w-12 h-12 " />
//                             ):(
//                                 <Image/>
//                             )}
//                             <p>{icon ? "Change icon" : "Pick icon"}</p>
//                         </div>
//                                 {isOpen && (
//                                     <div className="relative">
//                                         <button 
//                                              onClick={() => setIsOpen(false)}
//                                              className="w-7 h-7 flex items-center justify-center bg-white border border-gray-200 rounded-full absolute -top-2 -right-2 z-10 cursor-pointer">
//                                               <X/>
//                                               <EmojiPickerPopup
//                                                     open={isOpen}
//                                                     onEmojiClick={() => onSelect(emoji?.imageUrl || "")}
//                                               />
//                                         </button>
//                                     </div>
//                                 )}
//                 </div>
//               </div>

//     )
// }


// export default EmojiPickerPopup;