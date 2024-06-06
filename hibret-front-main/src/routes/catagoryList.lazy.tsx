import React, { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { fetchCatag, updateCatag } from '../services/api/catagoryApi';
import CatagAdd from "./addCatagory..lazy";
import SubcategoryList from "../components/SubCatagoryList";
import EditCategory from "../components/EditCatagory";
import { DataGrid, GridColDef, GridActionsCellParams } from '@mui/x-data-grid';

export const Route = createFileRoute("/catagoryList")({
  component: () => <CategoryList />,
});

function CategoryList() {
  const [user, setUser] = useState([]);
  const [showAddTemplate, setShowAddTemplate] = useState(false);
  const [showSubCatModal, setShowSubCatModal] = useState(false);
  const [showEditCategoryModal, setShowEditCategoryModal] = useState(false);
  const [editCategoryId, setEditCategoryId] = useState('');
  const [editCategoryName, setEditCategoryName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    async function fetchCategories() {
      const { data, isError } = await fetchCatag();
      if (!isError) {
        const updatedUserData = data.map((category) => ({
          id: category._id,
          catagoryname: category.name,
        }));
        setUser(updatedUserData);
      }
    }
    fetchCategories();
  }, []);

  const openAddTemplate = () => {
    setShowAddTemplate(true);
  };

  const closeAddTemplate = () => {
    setShowAddTemplate(false);
  };

  const openSubCatModal = (id: string, name: string) => {
    setCategoryId(id);
    setCategoryName(name);
    setShowSubCatModal(true);
  };

  const closeSubCatModal = () => {
    setShowSubCatModal(false);
  };

  const openEditCategoryModal = (id: string, name: string) => {
    setEditCategoryId(id);
    setEditCategoryName(name);
    setShowEditCategoryModal(true);
  };

  const closeEditCategoryModal = () => {
    setShowEditCategoryModal(false);
  };

  const handleUpdateCategory = async (id: string, newName: string) => {
    await updateCatag(id, { name: newName });
    fetchCategories();
    closeEditCategoryModal();
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 230 },
    { field: 'catagoryname', headerName: 'Category Name', width: 230, editable: true },
    {
      field: 'actions',
      headerName: 'Action',
      width: 150,
      type: 'actions',
      renderCell: (params: GridActionsCellParams<any>) => {
        const onEdit = () => {
          openEditCategoryModal(params.id, params.row.catagoryname);
        };

        const onDelete = () => {
          console.log('Delete button clicked for row:', params.id);
        };

        return (
          <div className="flex justify-around">
            <button onClick={onEdit} className="text-blue-500 hover:text-blue-700">
              <img src="/asset/icons/edit.png" className="w-5" />
            </button>
            <button onClick={onDelete} className="text-red-500 hover:text-red-700 mr-4">
              <img src="/asset/icons/delete.svg" className="w-5" />
            </button>
          </div>
        );
      },
    },
    {
      field: 'subcategories',
      headerName: 'Subcategories',
      width: 150,
      renderCell: (params: GridActionsCellParams<any>) => {
        return (
          <SubcategoryButton
            categoryId={params.id}
            categoryName={params.row.catagoryname}
            openSubCatModal={openSubCatModal}
          />
        );
      },
    },
  ];

  const SubcategoryButton = ({ categoryId, categoryName, openSubCatModal }) => {
    const handleShowSubCat = () => {
      openSubCatModal(categoryId, categoryName);
    };

    return (
      <div>
        <button onClick={handleShowSubCat} className="text-[#00B0AD] hover:text-green-700">
          Show Subcategories
        </button>
      </div>
    );
  };

  return (
    <div className="mx-3">
      <div className="flex">
        <SideBar />
        <div className="w-full flex flex-col">
          <NavBar />
          <div className={`flex justify-between ${showAddTemplate ? "opacity-20" : "opacity-100"}`}>
            <div className="flex flex-col gap-3 my-5">
              <h2 className="text-[#4A176D] text-3xl font-bold">Category List</h2>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <button onClick={openAddTemplate} className="flex gap-2 bg-[#00B0AD] px-4 py-2 rounded-lg text-white">
                <img src="/asset/icons/plus3.png" className="w-5" />
                Add Category
              </button>
            </div>
          </div>
          {showAddTemplate && (
            <React.Suspense fallback={<div>Loading...</div>}>
              <CatagAdd onClose={closeAddTemplate} />
            </React.Suspense>
          )}
          <div className={`h-full w-full mt ${showAddTemplate ? "opacity-20" : "opacity-100"}`}>
            <DataGrid
              rows={user}
              columns={columns.map(column => {
                if (column.field === 'subcategories') {
                  return {
                    ...column,
                    renderCell: (params) => (
                      <SubcategoryButton
                        categoryId={params.id}
                        categoryName={params.row.catagoryname}
                        openSubCatModal={openSubCatModal}
                      />
                    ),
                  };
                }
                return column;
              })}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              onRowSelectionModelChange={(id) => {
                console.log(id);
              }}
            />
          </div>
          {showSubCatModal && (
            <SubcategoryList
              categoryId={categoryId}
              categoryName={categoryName}
              onClose={closeSubCatModal}
            />
          )}
          {showEditCategoryModal && (
            <EditCategory
              categoryId={editCategoryId}
              categoryName={editCategoryName}
              onClose={closeEditCategoryModal}
              onUpdate={handleUpdateCategory}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
