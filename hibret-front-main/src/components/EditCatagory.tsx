import React, { useState, useEffect } from "react";

interface EditCategoryProps {
  categoryId: string;
  categoryName: string;
  onClose: () => void;
  onUpdate: (categoryId: string, newCategoryName: string) => void;
}

const EditCategory: React.FC<EditCategoryProps> = ({ categoryId, categoryName, onClose, onUpdate }) => {
  const [newCategoryName, setNewCategoryName] = useState(categoryName);

  useEffect(() => {
    setNewCategoryName(categoryName);
  }, [categoryName]);

  const handleUpdate = () => {
    onUpdate(categoryId, newCategoryName);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-md w-3/4 p-4 overflow-auto">
        <button onClick={onClose} className="mt-4 ml-auto px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none">
          Close
        </button>
        <h2 className="text-xl font-bold mb-4">Edit Category</h2>
        <div className="grid grid-cols-2 gap-4">
          <label>Category Name:</label>
          <input
            type="text"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            className="border border-gray-400 p-2 rounded-md"
          />
        </div>
        <button onClick={handleUpdate} className="mt-4 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 focus:outline-none">
          Update
        </button>
      </div>
    </div>
  );
};

export default EditCategory;
