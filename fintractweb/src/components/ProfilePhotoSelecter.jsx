import { Trash, Upload, User } from "lucide-react";
import { useRef, useState } from "react";

const ProfilePhotoSelecter = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewURL, setPreviewURL] = useState(image);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);

      const preview = URL.createObjectURL(file);
      setPreviewURL(preview);
    }
  };

  const handleRemoveImage = (e) => {
    e.preventDefault();
    setImage(null);
    setPreviewURL(null);
  };

  const onChooseFile = (e) => {
    e.preventDefault(); 
    inputRef.current.click();
  };

  return (
    <div className="flex justify-center mb-6">
      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {!image ? (
        <div className="relative w-20 h-20 flex items-center justify-center bg-gray-200 rounded-full">
          {/* Default avatar icon */}
          <User className="text-blue-600" size={35} />

          {/* Upload button */}
          <button
            type="button"
            onClick={onChooseFile}
            className="text-blue-600 absolute -bottom-1 -right-1 w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer shadow"
          >
            <Upload size={15} />
          </button>
        </div>
      ) : (
        <div className="relative w-20 h-20">
          <img
            src={previewURL}
            alt="Profile Photo"
            className="w-20 h-20 object-cover rounded-full"
          />

          {/* Remove button */}
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute -bottom-1 -right-1 w-8 h-8 flex items-center justify-center bg-red-800 text-white rounded-full shadow"
          >
            <Trash size={15} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelecter;
