import React, { useState, useEffect } from "react";
import { DataGrid, GridColDef, GridActionsCellParams } from '@mui/x-data-grid';
import { fetchsubCatag } from '../services/api/subcatagApi';

interface SubcategoryListProps {
  categoryId: string;
  categoryName: string;
  onClose: () => void;
}

const SubcategoryList: React.FC<SubcategoryListProps> = ({ categoryId, categoryName, onClose }) => {
  const [subCatData, setSubCatData] = useState([]);

  useEffect(() => {
    const fetchSubcategories = async () => {
      if (categoryId) {
        const { data, isError } = await fetchsubCatag(categoryId);
        if (!isError) {
          const updatedSubData = data.map((subcategory) => ({
            id: subcategory._id,
            name: subcategory.name,
          }));
          setSubCatData(updatedSubData);
        }
      } else {
        console.error('No category ID available');
      }
    };

    fetchSubcategories();
  }, [categoryId]);

  const columnsSubCat: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 300 },
    { field: 'name', headerName: 'Subcategory Name', width: 200 },
    {
      field: 'actions',
      headerName: 'Action',
      width: 150,
      type: 'actions',
      renderCell: (params: GridActionsCellParams<any>) => {
        const onEdit = () => {
          console.log('Edit button clicked for subcategory:', params.id);
        };

        const onDelete = () => {
          console.log('Delete button clicked for subcategory:', params.id);
        };

        return (
          <div className="flex justify-around">
            <button onClick={onEdit} className="text-blue-500 hover:text-blue-700">
              <img src="/asset/icons/edit.png" className="w-5" alt="Edit icon" />
            </button>
            <button onClick={onDelete} className="text-red-500 hover:text-red-700 mr-4">
              <img src="/asset/icons/delete.svg" className="w-5" alt="Delete icon" />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-md w-3/4 h-3/4 p-4 relative overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none"
        >
          Close
        </button>
        <h2 className="text-xl font-bold mt-20 mb-4">Subcategory Details for "{categoryName}"</h2>
        <div className="h-full">
          <DataGrid rows={subCatData} columns={columnsSubCat} autoHeight />
        </div>
      </div>
    </div>
  );
};

export default SubcategoryList;
